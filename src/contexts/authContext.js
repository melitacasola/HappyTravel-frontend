"use client";

import {
    createContext,
    useCallback,
    useContext,
    useMemo,

} from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext({
    login: (authTokens) => { },
    logout: () => { },
    getAuthToken: () => null,
    
});

export default function AuthContextProvider({ children }) {
    

    const login = useCallback(function (authTokens) {
        Cookies.set("laravel_session", authTokens);
        
    }, []);
    

    const logout = useCallback(function () {

        Cookies.remove("laravel_session");
        Cookies.remove("laravel_session", { domain: "localhost" })
        Cookies.remove("laravel_session", { domain: "localhost", path: "/" });
        
    }, []);

    const getAuthToken = useCallback(() => {
        const authTokens = Cookies.get("laravel_session");
        return authTokens ? authTokens : null;
    }, []);

    const value = useMemo(
        () => ({
            
            login,
            logout,
            getAuthToken,
        }),
        [ login, logout, getAuthToken]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
    return useContext(AuthContext);
}