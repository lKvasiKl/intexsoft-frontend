import {createContext, useEffect, useState} from 'react';
import {getSessionFromStorage, removeSessionFromStorage} from '../../helpers/tokens';
import * as authService from '../../api/services/authService';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const accessToken = getSessionFromStorage() || false;
        if (accessToken) {
            setIsAuth(true);
        }
    }, []);

    const signUp = async (form) => {
        await authService.register(form);
        setIsAuth(true);
    };

    const logIn = async (form) => {
        await authService.login(form);
        setIsAuth(true);
    };

    const logOut = () => {
        setIsAuth(false);
        removeSessionFromStorage();
    };

    const value = {isAuth, logIn, logOut, signUp};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;