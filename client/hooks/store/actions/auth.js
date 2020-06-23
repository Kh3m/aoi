
import * as actionTypes from "./actionTypes";
import { request } from "../../../lib/http/request";
import Router from "next/router";
import { useStore } from "../store";

const expirationTimeInSecs = () => {
    const expirationDate = new Date(localStorage.getItem("expirationDate"))
    return (expirationDate.getTime() - new Date().getTime()) / 1000;;  
}

const useAuthActions = () => {
    const dispatch = useStore()[1];

    // auth start activate spinner
    const authStart = () => {
        dispatch(actionTypes.AUTH_START);
    }

    // auth logout clear authentication datas
    const authLogout = () => {
        localStorage.removeItem("localId")
        localStorage.removeItem("tokenId")        
        localStorage.removeItem("expirationDate"); 
        dispatch(actionTypes.AUTH_LOGOUT);
    }

    // auth error - triggers when there is error with login
    const authError = (errors) => {
        dispatch(actionTypes.AUTH_ERROR, errors);
    }

    // auth response helper
    const authResponseSync = (data) => {
        dispatch(actionTypes.AUTH_RESPONSE, data);
    }

    // helper function fr auth response
    const authRes = ( user ) => {
        const expirationDate = new Date(new Date().getTime() + user.expiresIn * 1000);
        // store user's Id and token for authomatic login upon referesh
        localStorage.setItem("localId", user.localId)
        localStorage.setItem("tokenId", user.tokenId)        
        localStorage.setItem("expirationDate", expirationDate); 
        authResponseSync(user);    
    }

    // auth logout after expiration time
    const authLogoutAfterExpirationTime = (expirationTime) => {
        // convert to milliseconds
        const expirationTimeMili = expirationTime * 1000
        setTimeout(() => {
            dispatch(authLogout())
        }, expirationTimeMili);
    }

    const authLoginAuto = async () => {
        authStart();
        const token = localStorage.getItem("tokenId");
        if(!token) {
            authLogout();
            Router.replace("/")
        } else {
            const expirationDate = new Date(localStorage.getItem("expirationDate"));
            if(expirationDate <= new Date()) {
                authLogout();
                Router.replace("/")
            } else {
                authLogoutAfterExpirationTime(expirationTimeInSecs());
                let graphqlQuery = {
                    query: `
                        query getUser($localId: ID!){
                            getUser(localId:$localId)
                            {
                                localId
                                email
                                fullName
                            }
                        },
                    `,
                    variables: { localId: localStorage.getItem("localId") }
                }

                try {
                    const res = await request(graphqlQuery);
                    if(res.errors) {
                        authError(res.errors.map(e => e.message));
                    }
                    if(res.data) {
                        authResponseSync( res.data.getUser ); 
                    }
                } catch(err) {
                    authError(err);
                }
            }
        }
    }

    // auth response - get the user's data
    const authResponse = async (authData, isLogin) => {
        // start loading
        authStart();
        let graphqlQuery = {
            query: `
                mutation LoginUser($email: String!, $password: String!){
                    loginUser(email:$email, password:$password)
                    {
                        localId
                        email
                        tokenId
                        expiresIn
                        fullName
                    }
                },
            `,
            variables: { email: authData.email, password: authData.password }
        } 
        if(!isLogin) {
            graphqlQuery = {
                query: `
                    mutation CreateUser(
                        $email: String!, 
                        $fullName: String!, 
                        $password: String!) {
                        createUser(userInput: {email:$email, fullName:$fullName, password:$password })
                        {
                            localId
                            email
                            tokenId
                            expiresIn
                            fullName
                        }
                    }
                `,
                variables: { 
                    email: authData.email, 
                    fullName: authData.fullName, 
                    password: authData.password
                }
            }    
        }  
        try {
            const res = await request(graphqlQuery);
            if(res.errors) {
                authError(res.errors.map(e => e.message));
            }
            if(res.data) {
                if(isLogin) {
                    authRes( res.data.loginUser );
                } else {
                    authRes( res.data.createUser );
                }
                Router.replace("/");
            }
        } catch(err) {
            authError(err);
        }
    }

    return {
        authStart,
        authLogout,
        authResponse,
        authLoginAuto
    }
}
export default useAuthActions;