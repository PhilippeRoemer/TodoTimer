import React, { useState } from "react";
import Modal from "react-modal";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

Modal.setAppElement("#root");
function App() {
    const [inputText, setInputText] = useState("");
    const [inputTime, setInputTime] = useState("");
    const [todoItems, setTodoItems] = useState([]);

    const [darkMode, setDarkMode] = useState(false);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="container">
                <div className="DarkLightToggle">
                    <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                    <h3>{darkMode ? "Dark" : "Light"} mode enabled</h3>
                </div>
                <TodoForm inputText={inputText} setInputText={setInputText} inputTime={inputTime} setInputTime={setInputTime} todoItems={todoItems} setTodoItems={setTodoItems} />
                <TodoList todoItems={todoItems} setTodoItems={setTodoItems} />
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <p>Timer</p>
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                </Modal>
            </div>
        </div>
    );
}

export default App;
