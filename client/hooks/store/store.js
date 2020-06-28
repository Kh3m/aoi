import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = ( shouldListen = true ) => {
    const setState = useState(globalState)[1];
    
    // Type Of actions[actionIdentifier] is = undefined
    const dispatch = (actionIdentifier, payload) => {
        console.log("Type Of actions[actionIdentifier] is = " + typeof actions[actionIdentifier]);
        if(actions[actionIdentifier]) {
            const newState = actions[actionIdentifier](globalState, payload);
            globalState = { ...globalState, ...newState };
    
            for(const listener of listeners) {
                listener(globalState);
            }
        } else {
            console.log("========== \n ============= ");
            console.log("Type Of actions[actionIdentifier] is = " + typeof actions[actionIdentifier]);
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