import LoginForm from "./feature/auth/components/LoginForm";

import './App.css';

const handleClick = () => alert('vsem ku');

const App = () => {
    return (
        <div className="container">
            <LoginForm />
        </div>
    );
}

export default App;
