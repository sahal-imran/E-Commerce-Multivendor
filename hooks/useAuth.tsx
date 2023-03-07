import React, { createContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext, AuthProviderProps } from '../types/useAuth.types';


export const UserAuthContext = React.createContext<AuthContext | null>(null);

function AuthProvider({ children }: AuthProviderProps) {
    const Router = useRouter();
    // Auth State
    const [IsUserLoggedIn, SetUserLogged] = React.useState<boolean>(true);
    const Logout = () => { }

    return <UserAuthContext.Provider value={{
        IsUserLoggedIn,
        Logout
    }} >
        {children}
    </UserAuthContext.Provider>
}

export default AuthProvider