
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
                    _id
                    product_name
                    description
                    price
                    sizes
                    colors
                    image_urls
                    quantity
                    brand
                    category
                    in_stock
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

export const updateProductQuery = (
    _id,
    {
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
) => {
    return { 
        query: `
            mutation Update(
                $_id: ID!,
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
                update(_id: $_id,
                    data: {
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
                        _id
                        product_name
                        description
                        price
                        sizes
                        colors
                        image_urls
                        quantity
                        brand
                        category
                        in_stock
                }
            }
        `,
        variables: {
            _id,
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

export const findProductQuery = ({limit, sortBy}) => {
    return {
        query: `
            query Products($limit: Int, $sortBy: String) {
                products(query: {limit: $limit, sortBy: $sortBy}) {
                    _id
                    product_name
                    description
                    price
                    sizes
                    colors
                    image_urls
                    quantity
                    brand
                    category
                    in_stock              
                }
            }
        `,
        variables: {limit, sortBy}
    }
}

export const deleteProductQuery = (_id) => {
    return {
        query: `
            mutation Delete($_id: ID!) {
                delete(_id: $_id) {
                    _id
                }
            }
        `,
        variables: {_id}
    }
}