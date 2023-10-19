import { createContext, useContext, type PropsWithChildren, useState, useEffect } from "react";
import type { AuthContext } from "./auth.interface";
import repository from "~common/repository";
import { ACCESS_TOKEN } from "~common/constants";

const AuthContext = createContext<AuthContext | undefined>(undefined);

export const useAuth = (): AuthContext => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    async function loadInfo() {
        const token = await repository.get<string>(ACCESS_TOKEN)
        setAccessToken(token);
        setLoading(false);
    }

    useEffect(() => {
        loadInfo();
    }, []);

    const saveAccessToken = async (accessToken: string) => {
        await repository.set(ACCESS_TOKEN, accessToken);
        setAccessToken(accessToken);
    };


    const contextValue: AuthContext = {
        loading,
        accessToken,
        saveAccessToken,
    };

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>;
};