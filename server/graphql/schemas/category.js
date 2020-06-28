
exports.categoryDeclaration = `
    type Category {
        type: String!
        sub_type: String!
        products: [Product!]
    }

    input CategoryInput {
        type: String!
        sub_type: String!
    }
`;

exports.categoryMutation = `
    createCategory(productId: ID!, data: CategoryInput): Category!
`;

exports.categoryQuery = `

`;