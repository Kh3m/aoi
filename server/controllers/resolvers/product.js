const Product = require("../../models/product");

exports.createProduct = async ( args, req) => {
    // destructure data from args
    const { data } = args;
    // create new product
    const newProduct = new Product({ ...data });
    // save the product to db
    const product = await newProduct.save();

    // return the product that was created
    return {
        productId: product._id,
        product_name: product.product_name,
        description: product.description,
        price: product.price,
        sizes: product.sizes,
        colors: product.colors,
        image_urls: product.image_urls,
        quantity: product.quantity,
        brands: product.brand,
        reviews: product.reviews,
        category: product.category,
        orders: product.orders,
        carts: product.carts,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        in_stock: !!product.quantity 
    }
}