
import { initStore } from "../store";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
    product: {
        data: [],
        errors: null,
        loading: false
    }
}

const configureProduct = () => {
    const productActions = {
        [actionTypes.PRODUCT_START]: (/*global state passed*/ state) => {
            return { ...state, product: {...state.product, loading: true }};
        },
        [actionTypes.PRODUCT_RESPONSE]: (state, data) => {
            if(state.product.data.length === data.length) {
                console.log("UP TO DATE..");
                return;
            }
            const updatedData = state.product.data.concat(data);
            return { 
                ...state, 
                product: { 
                    ...state.product, 
                    data: updatedData,
                    loading: false,
                    error: false
                }
            }
        },
        [actionTypes.PRODUCT_DELETE]: (state, productId) => {
            return {
                ...state,
                product: {
                    ...state.product,
                    data: state.product.data.filter(d => d._id !== productId),
                    loading: false,
                    error: false
                }
            }
        }
        ,
        [actionTypes.PRODUCT_ERROR]: (state, errors) => {
            console.log(errors)
            return { ...state, product: { ...state.product, errors: errors, loading: false}}
        }
    }

    initStore(initialState, productActions);    
}

export default configureProduct;