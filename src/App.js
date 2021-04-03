import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
    const [inputText, setInputText] = useState("");
    const [inputTime, setInputTime] = useState("");
    const [todoItems, setTodoItems] = useState([]);

    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="container">
                <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                <h3>{darkMode ? "Dark" : "Light"} mode enabled</h3>
                <TodoForm inputText={inputText} setInputText={setInputText} inputTime={inputTime} setInputTime={setInputTime} todoItems={todoItems} setTodoItems={setTodoItems} />
            </div>
        </div>
    );
}

export default App;
