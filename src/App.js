import Button from "./components/UI/Button";

import './App.css';

const handleClick = () => alert('vsem ku');

const App = () => {
    return (
        <div className="container">
            <Button onClick={handleClick}>Click me</Button>
        </div>
    );
}

export default App;
