import fetch from "node-fetch";

const BASE_URL="http://localhost:2020";
export const GRAPHQLURL = `${BASE_URL}/graphql`;

export const request = async (graphqlQuery) => {
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


export const fetcher = async (key, query) => {
    const res = await fetch(key, {
        method: "POST",
        body: JSON.stringify(query),
        headers: {
            "Content-Type": "application/json"
        }
    });

    return res.json();
}