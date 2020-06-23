
const controllers = require("../controllers/index");

// users resolver
const userResolvers = {
    createUser: controllers.user.createUser,
    loginUser: controllers.user.loginUser,
    getUser: controllers.user.getUser
}

module.exports = {
    ...userResolvers
}
