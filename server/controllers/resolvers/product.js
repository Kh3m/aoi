
exports.createProduct = ( args, req) => {

    console.log(JSON.stringify({args}, null, 2));

    return {
        productId: "6748ur",
        title: "My First Product",
        description: "I Love this product",
        price: 12.23,
        sizes: [17.3, 23.2],
        colors: ["red", "blue"],
        image_urls: [
            "http://localhost:3300/uploads/avatar_1593349658719_IMG-20200606-WA0017.jpg",
            "http://localhost:3300/uploads/products_1593349390260_DSC_2904.JPG"
        ],
        quantity: 16,
        feature: "Makes sense",
        material: "Leather",
        brands: "Gucci"
    }
}