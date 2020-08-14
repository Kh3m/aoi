import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = ( shouldListen = true ) => {
    const setState = useState(globalState)[1];
    
    const dispatch = (actionIdentifier, payload) => {
        // Check if action[actionIdentifier] is not undefined
        if(actions[actionIdentifier]) {
            const newState = actions[actionIdentifier](globalState, payload);
            globalState = { ...globalState, ...newState };
    
            for(const listener of listeners) {
                listener(globalState);
            }
        } else {
            console.log("AGAIN");
        }
    }

    useEffect(() => {
        if(shouldListen) {
            listeners.push(setState);
        }
        return () => {
            if(shouldListen) {
                listeners = listeners.filter(li => li !== setState);
            }
        }
    }, [setState, shouldListen]);

    return [globalState, dispatch];
}

export const initStore = (initialState, userActions) => {
    if(initialState) {
        globalState = { ...globalState, ...initialState };
    }
    actions = { ...actions, ...userActions };
}