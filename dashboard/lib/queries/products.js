
export const addProductQuery = (
    product_name,
    description,
    price,
    image_urls,
    quantity,
    category,
    colors,
    sizes,
    brand
) => {
    return { 
        query: `
            mutation CreateProduct(
                $product_name: String!,
                $description: String!,
                $price: Float!,
                $image_urls: [String!]!,
                $quantity: Int!,
                $category: String!,
                $colors: [String!],
                $sizes: [Float!],
                $brand: String
            ) {
                createProduct(data: {
                    product_name: $product_name,
                    description: $description,
                    price: $price,
                    image_urls: $image_urls,
                    quantity: $quantity,
                    category: $category,
                    colors: $colors,
                    sizes: $sizes,
                    brand: $brand
                }) {
                    productId
                    product_name
                    description
                }
            }
        `,
        variables: {
            product_name,
            description,
            price,
            image_urls,
            quantity,
            category,
            colors,
            sizes,
            brand
        }
    }
}

export const updateProductQuery = `

`