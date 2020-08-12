
import request from "../requests";
import { addProductQuery } from "../queries/products";
import { useState } from "react";

const useProductHttp = () => {
        const [productLoading, setProductLoading] = useState(false);
        const sendSaveRequest = async (
            product_name,
            description,
            price,
            image_urls,
            quantity,
            category,
            colors,
            sizes,
            brand=""
        ) => {
            try {
                setProductLoading(true);
                const res = await request(addProductQuery(
                    product_name,
                    description,
                    price,
                    image_urls,
                    quantity,
                    category,
                    colors,
                    sizes,
                    brand
                ));
                console.log("product res", res);
                setProductLoading(false);                
            } catch (err) {
                console.log("Something went wrong", err);
                setProductLoading(false); 
            }
        }

        return {
            productLoading,
            sendSaveRequest            
        }
}

export default useProductHttp;