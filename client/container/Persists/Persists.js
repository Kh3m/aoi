import { useEffect } from "react";
import useAuthActions from "../../hooks/store/actions/auth";

const persists = ( { children } ) => {
    const { authLoginAuto } = useAuthActions();

    useEffect(() => {
        authLoginAuto();
    }, []);

    return <div>{children}</div>;
}

export default persists;