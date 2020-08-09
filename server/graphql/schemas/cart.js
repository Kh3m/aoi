
exports.cartDeclaration = `
    type Cart {
        price: Float!
        quantity: Int!
        products: [Product!]!
    }
`;

exports.cartMutation = `
    addToCart(productId: ID!): Cart!
`;

exports.cartQuery = `
    cart(userId: ID!): Cart!
    carts: Cart!
`;