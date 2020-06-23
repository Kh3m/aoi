
const { buildSchema } = require("graphql");

const { userDeclaration, userQuery, userMutation } = require("./schemas/user");

module.exports = buildSchema(`
    ${userDeclaration}

    type RootMutation {
        ${userMutation}
    }

    type RootQuery {
        ${userQuery}
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);