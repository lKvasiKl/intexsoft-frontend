import {useContext} from 'react';
import {AuthContext} from '../feature/auth/AuthProvider';

export const useAuth = () => {
    return useContext(AuthContext);
}