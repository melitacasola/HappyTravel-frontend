"use client";

import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState
} from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext({
    login: (authTokens) => { },
    logout: () => { },
    getAuthToken: () => null,
    isAuthenticated: () =>false,
});

export default function AuthContextProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = useCallback(function (authTokens) {
        Cookies.set("authTokens", JSON.stringify(authTokens));
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback(function () {
        Cookies.remove("authTokens");
        setIsAuthenticated(false);
    }, []);

    const getAuthToken = useCallback(() => {
        const authTokens = Cookies.get("authTokens");
        return authTokens ? JSON.parse(authTokens) : null;
    }, []);

    const value = useMemo(
        () => ({
            
            login,
            logout,
            getAuthToken,
            isAuthenticated
        }),
        [ login, logout, getAuthToken, isAuthenticated]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
    return useContext(AuthContext);
}