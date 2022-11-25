import {Navigate} from 'react-router-dom';
import {useAuth} from '../../hooks/useAuth';

function NotAuthRoute({children}) {
    const {isAuth} = useAuth;

    if (isAuth) {
        return <Navigate to="/home" />
    }

    return children;
}

export default NotAuthRoute;