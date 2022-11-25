import {Routes, BrowserRouter} from 'react-router-dom';
import NotAuthRoutes from './routes/NotAuthRoutes/NotAuthRoutes';

import './App.scss';
import AuthProvider from "./feature/auth/AuthProvider";


const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="App">
                    <NotAuthRoutes/>
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
