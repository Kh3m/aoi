
import * as actionTypes from "./actionTypes";
import request from "../../../lib/requests";
import { useStore } from "../store";
import { 
    addProductQuery,
    updateProductQuery,
    findProductQuery,
    deleteProductQuery
} from "../../../lib/queries/products";

const useProductActions = () => {
    const dispatch = useStore()[1];

    // auth start activate spinner
    const productStart = () => {
        dispatch(actionTypes.PRODUCT_START);
    }

    // product error - triggers when there is error with product request
    const productError = (errors) => {
        dispatch(actionTypes.PRODUCT_ERROR, errors);
    }

    // product response helper
    const productResponse = (data) => {
        dispatch(actionTypes.PRODUCT_RESPONSE, data);
    }

    // delete a single product from state
    const deleteProduct = (productId) => {
        dispatch(actionTypes.PRODUCT_DELETE, productId);
    }

    // auth response - get the user's data
    const sendSaveRequest = async (
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
        // start loading
        productStart();  
        try {
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
            
            if(res.errors) {
                console.log("errors", res);
            }

            if(res.data) {
                console.log("products", res);
                productResponse(res.data.createProduct); 
            }
                           
        } catch (err) {
            console.log("Something went wrong", err);
            productError(err); 
        }  
    }

    // auth response - get the user's data
    const sendUpdateRequest = async (
        productId,
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
        // start loading
        productStart();  
        try {
            const res = await request(updateProductQuery(
                productId,
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

            ));
            
            if(res.errors) {
                console.log("errors", res);
            }

            if(res.data) {
                console.log("updateProduct", res);
                productResponse(res.data.update); 
            }
                           
        } catch (err) {
            console.log("Something went wrong", err);
            productError(err); 
        }  
    }

    const sendFindRequest = async (query) => {
        // start loading
        productStart();  
        try {
            const res = await request(findProductQuery( query ));
            if(res.errors) {
                console.log("errors", res);
            }

            if(res.data) {
                console.log("products", res);
            }
            
            productResponse(res.data.products);                
        } catch (err) {
            console.log("Something went wrong", err);
            productError(err); 
        }  
    }
    
    const sendDeleteRequest = async ( productId ) => {
        // start loading
        productStart();  
        try {
            const res = await request(deleteProductQuery( productId ));
            if(res.errors) {
                console.log("errors", res);
            }

            if(res.data) {
                console.log("products", res);
                // dispatch PRODUCT_DELETE action to reducer
                deleteProduct(res.data.delete._id); 
            }               
        } catch (err) {
            console.log("Something went wrong", err);
            productError(err); 
        }  
    }

    return {
        productStart,
        sendFindRequest,
        sendSaveRequest,
        sendUpdateRequest,
        sendDeleteRequest
    }
}
export default useProductActions;