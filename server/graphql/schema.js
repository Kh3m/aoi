
const { buildSchema } = require("graphql");

const { userDeclaration, userQuery, userMutation } = require("./schemas/user");
const { productDeclaration, productQuery, productMutation } = require("./schemas/product");
const { orderDeclaration, orderQuery, orderMutation } = require("./schemas/order");
const { cartDeclaration, cartQuery, cartMutation } = require("./schemas/cart");
const { reviewDeclaration, reviewQuery, reviewMutation } = require("./schemas/review");

module.exports = buildSchema(`
    ${userDeclaration}
    ${productDeclaration}
    ${orderDeclaration}
    ${cartDeclaration}
    ${reviewDeclaration}

    type RootMutation {
        ${userMutation}
        ${productMutation}
        ${orderMutation}
        ${cartMutation}
        ${reviewMutation}
    }

    type RootQuery {
        ${userQuery}
        ${productQuery}
        ${orderQuery}
        ${cartQuery}
        ${reviewQuery}
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);