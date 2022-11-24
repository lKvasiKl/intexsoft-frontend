import {Routes, BrowserRouter} from 'react-router-dom';
import NotAuthRoutes from './routes/NotAuthRoutes/NotAuthRoutes';

import './App.scss';


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <NotAuthRoutes/>
            </div>
        </BrowserRouter>
    );
}

export default App;
