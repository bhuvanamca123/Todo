import "./App.css";
import { Routes, Route } from "react-router-dom";
import Todo from "./Todos";
import Navbar from "./Navbar";
import Login from "./Login";
import MultiUser from "./Multiuser";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route index path="/" element={[<Navbar />, <Login />]} />
                
                <Route exact path="/Todo" element={[<Navbar />, <Todo />]} />
                <Route
                    exact
                    path="/multiuser"
                    element={[<Navbar />, <MultiUser />]}
                />
            </Routes>
        </div>
    );
}

export default App;