
const validator = require("validator");
const security = require("../../utils/security");

// Models 
const User = require("../../models/user");

exports.createUser = async function ({ userInput }, req) {
    console.log(userInput)
    const errors = [];
    
    const email = userInput.email;
    const full_name = userInput.fullName;
    const password = userInput.password
    // const confirmPassword = userInput.confirmPassword;

    try {
        if(!validator.isLength(password, {min: 8})){
            errors.push("Password too short");
        }
        // if(password !== confirmPassword) {
        //     errors.push("Password do not match")
        // }
        if(!validator.isEmail(email)){
            errors.push("Inavalid Email");
        }
        // check if user with incoming email exists       
        const findUser = await User.findOne({email});
        // if exists
        if(findUser) {
            errors.push(`User already exists`);    
        } 

        if(errors.length !== 0) {
            const error = new Error(errors);
            console.log(error)
            throw error;
        }

        // if no errors 
        const hashedPassword = security.hash(password.toString());
        // create new user
        const newUser = new User({email: email.toLowerCase(), full_name, password: hashedPassword});

        // save user
        const createdUser = await newUser.save();
        
        if(!createdUser) {
            const error = new Error("User Not Created");
            error.statusCode(422);
            throw error;
        }

        // creat token for subsequent request
        const token = security.jwtSign({localId: createdUser._id, email: createdUser.email});

        return {
            localId: createdUser._id,
            email: createdUser.email,
            tokenId: token,
            fullName: createdUser.full_name,
            expiresIn: 3600
        }

    } catch(error) {
        error.statusCode = 500;
        console.log(error)
        throw error;
    }
}

exports.loginUser = async ( {email, password}, req) => {
    try {
        const user = await User.findOne({email: email.toLowerCase()});
        if(!user) {
            const error = new Error("User not found");
            error.statusCode = 404;
            console.log(error)
            throw error;
        }

        if(!security.compare(password, user.password)) {
            const error = new Error("Incorrect Password");
            error.statusCode = 422;
            console.log(error)
            throw error;
        }
        
        // create token for subsequent requests
        const token = security.jwtSign({
            localId: user._id,
            email: user.email
        });

        return {
            localId: user._id,
            tokenId: token,
            email: user.email,
            fullName: user.full_name,
            expiresIn: 3600
        }
    } catch(error) {
        error.statusCode = 500
        throw error;
    }
}

exports.getUser = ( async ({ localId }, req) => {
    try {
        const user = await User.findById(localId)
        if(!user) {
            api.error("User not found")
        }
        const populatedUser = await user.populate("profile").execPopulate();
        return {
            localId: populatedUser._id,
            email: populatedUser.email,
            fullName: populatedUser.full_name,
        }
    } catch(error) {
        throw error;
    }
});