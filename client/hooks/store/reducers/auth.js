
import { initStore } from "../store";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
    auth: {
        isAuth: false,
        data: {},
        errors: null,
        loading: false
    }
}

const configureAuth = () => {
    const userActions = {
        [actionTypes.AUTH_START]: (state) => {
            return { ...state, auth: {...state.auth, loading: true }};
        },
        [actionTypes.AUTH_RESPONSE]: (state, data) => {
            console.log("AUTH_RESPONSE", data);
            return { ...state, auth: { ...state.auth, data: { ...state.auth.data, ...data }, isAuth: true, loading: false }}
        },
        [actionTypes.AUTH_ERROR]: (state, errors) => {
            console.log(errors)
            return { ...state, auth: { ...state.auth, errors: errors, isAuth: false, loading: false}}
        },
        [actionTypes.AUTH_LOGOUT]: (state) => {
            return { ...state, auth: { ...state.auth, data:{profile: {imageUrl: "", displayName: ""}}, errors: null, isAuth: false, loading: false} }
        }
    }

    initStore(initialState, userActions);    
}

export default configureAuth;