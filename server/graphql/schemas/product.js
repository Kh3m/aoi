exports.productDeclaration = `
    input ProductInput {
        title: String!
        description: String!
        price: Float!
        sizes: [Float!]
        colors: [String!]
        image_urls: [String!]!
        quantity: Int!
        feature: String
        material: String
        brands: String
        category: CategoryInput
    }

    type Product {
        productId: ID!
        title: String!
        description: String!
        price: Float!
        sizes: [Float!]
        colors: [String!]
        image_urls: [String!]!
        quantity: Int!
        feature: String
        material: String
        brands: String
        reviews: [Review]
        category: Category
        orders: [Order]
        carts: [Cart]
        createdAt: String
        updatedAt: String
    }
`

exports.productMutation = `
    createProduct(data: ProductInput): Product!
`

exports.productQuery = `
    product(productId: ID!): Product!
    products: Product!
`

// mutation {
//     createProduct(data:{
//       title:"First Product",
//       description:"This is my first product in this site",
//       price:12.67,
//       sizes: [12.22 67.78],
//       colors:["green", "red", "purple"],
//       image_urls: ["/products/airzoom.jpg", "/products/cloudfeel.jpg"],
//       quantity:5,
//       feature:"Lightweight",
//       material:"Leather",
//       brands:"Adidas",
//       category: {
//         type:"men",
//         sub_type:"shoes"
//       }
      
//     }) {
//       productId
//       title
//       description
//     }
//   }