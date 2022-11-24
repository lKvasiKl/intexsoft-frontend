import {Routes, Route, Navigate} from 'react-router-dom';
import {LOGIN_ROUTE, SIGNUP_ROUTE} from '../../constants/routePath';
import NotAuthRoute from '../../feature/auth/NotAuthRoute';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';

const NotAuthRoutes = () => {
    return (
        <Routes>
            <Route
                exact path="/"
                element={<Navigate to={LOGIN_ROUTE} replace={true}/>}
            />
            <Route
                exact path={LOGIN_ROUTE}
                element={
                    <NotAuthRoute>
                        <Login/>
                    </NotAuthRoute>
                }
            />
            <Route
                exact path={SIGNUP_ROUTE}
                element={
                    <NotAuthRoute>
                        <Register/>
                    </NotAuthRoute>
                }
            />
        </Routes>
    )
}

export default NotAuthRoutes;