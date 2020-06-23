exports.userDeclaration = `
    input UserSignUpInputData {
        email: String!
        fullName: String!
        password: String!
    }

    type User {
        localId: ID!
        tokenId: ID
        email: String!
        expiresIn: Int
        fullName: String!
    }
`

exports.userMutation = `
    createUser(userInput: UserSignUpInputData): User!
    loginUser(email: String!, password: String!): User!
`

exports.userQuery = `
    getUser(localId: ID!): User!
`