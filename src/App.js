import Login from "./feature/auth/components/Login";

import './App.scss';

const handleClick = () => alert('vsem ku');

const App = () => {
    return (
        <div className="container">
            <Login />
        </div>
    );
}

export default App;
