exports.productDeclaration = `
    input ProductInput {
        product_name: String!
        description: String!
        price: Float!
        image_urls: [String!]!
        quantity: Int!
        category: String!
        colors: [String!]
        sizes: [Float!]
        brand: String
    }

    type Product {
        productId: ID!
        product_name: String!
        description: String!
        price: Float!
        sizes: [Float!]
        colors: [String!]
        image_urls: [String!]!
        quantity: Int!
        brand: String
        reviews: [Review]
        category: String!
        orders: [Order]
        carts: [Cart]
        createdAt: String
        updatedAt: String
        in_stock: Boolean
    }
`

exports.productMutation = `
    createProduct(data: ProductInput): Product!
`

exports.productQuery = `
    product(productId: ID!): Product!
    products: Product!
`