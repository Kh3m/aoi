
import fetch from "node-fetch";

export const BASE_URL="http://localhost:2020";
export const GRAPHQLURL = `${BASE_URL}/graphql`;

const request = async (graphqlQuery) => {
    const response = await fetch(GRAPHQLURL, 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( graphqlQuery )
    })
    return response.json();
}


export default request;