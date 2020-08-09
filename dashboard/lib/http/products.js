
import request from "../requests";
import { addProductQuery } from "../queries/products";

class Product {
    constructor (
        product_name,
        description,
        price,
        image_urls,
        quantity,
        category,
        colors,
        sizes,
        brand=""
    ) {
        this.product_name = product_name;
        this.description = description;
        this.price = price;
        this.image_urls = image_urls;
        this.quantity = quantity;
        this.category = category;
        this.colors = colors;
        this.sizes = sizes;
        this.brand = brand;
    }

    async sendSaveRequest () {
        try {
            const res = await request(addProductQuery(
                this.product_name,
                this.description,
                this.price,
                this.image_urls,
                this.quantity,
                this.category,
                this.colors,
                this.sizes,
                this.brand
            ));
            
            console.log("add product res", res);
        } catch (err) {
            console.log("Something went wrong", err);
        }
    }

    async sendFindRequest () {

    }
}

export default Product;