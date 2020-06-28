
const controllers = require("../controllers/index");

// users resolver
const userResolvers = {
    createUser: controllers.user.createUser,
    loginUser: controllers.user.loginUser,
    getUser: controllers.user.getUser
}

// product resolvers 
const productResolvers = {
    createProduct: controllers.product.createProduct
}

module.exports = {
    ...userResolvers,
    ...productResolvers
}
