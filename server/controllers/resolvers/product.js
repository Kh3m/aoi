const Product = require("../../models/product");
const mongoose = require("mongoose");

exports.createProduct = async ( args, req) => {
    // destructure data from args
    const { data } = args;
    // create new product
    const newProduct = new Product({ ...data });
    // save the product to db
    const product = await newProduct.save();

    // return the product that was created
    return {
        _id: product._id,
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

exports.products = async ({query}, req) => {
    const products = await Product.find({}).limit(query.limit).sort([ [query.sortBy, -1] ]);
    console.log(products);
    if(!products) {
        const err = new Error("Can't fetch products");
        throw err;
    }

    const mappedProducts = products.map(product => ({ 
        _id: product._id,
        product_name: product.product_name,
        description: product.description,
        price: product.price,
        sizes: product.sizes,
        colors: product.colors,
        image_urls: product.image_urls,
        quantity: product.quantity,
        brand: product.brand,
        reviews: product.reviews,
        category: product.category,
        orders: product.orders,
        carts: product.carts,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        in_stock: !!product.quantity
     }));

    return mappedProducts;
}

exports.delete = async ({_id}, req) => {
    const deltedProduct = await Product.findByIdAndDelete({_id});
    console.log("Deleted...", deltedProduct);
    if(deltedProduct) {
        removeImages(deltedProduct.image_urls);
    }
    return deltedProduct;
}

exports.update = async ({_id, data}, req) => {
    console.log(_id, data.image_urls);
    try {
        const updatedData = await Product.findByIdAndUpdate(_id, {...data});
        // console.log(updatedData);
        removeImages(data.image_urls);
        return updatedData;
    } catch(err) {
        console.log(err);
        throw err;
    }
    
}

// helpers
const removeImages = ( image_urls ) => {
    image_urls.forEach(image_url => {
        mongoose.connection.db.collection("products.files")
        .deleteOne({filename: image_url.split("/")[2]}, (err, dl) => {
            if(err) throw err;
            // console.log("Image Deleted", dl);
        });
    })
}