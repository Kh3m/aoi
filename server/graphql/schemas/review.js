
exports.reviewDeclaration = `
    type Review {
        body: String!
        star: Int!
        user: User!
        product: Product!
    }
`;


exports.reviewMutation = `
    createReview(productId: ID!): Review!
`;

exports.reviewQuery = `
    reviews(productId: ID!): [Review!]
`