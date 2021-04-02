import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
    //first part of array is current state, second is the function that allows you to update the current state
    //inputText (current state) : setInputText (update function)
    const [inputText, setInputText] = useState("");
    const [inputTime, setInputTime] = useState("");
    const [todoItems, setTodoItems] = useState([]);
    return (
        <div className="App">
            <TodoForm inputText={inputText} setInputText={setInputText} inputTime={inputTime} setInputTime={setInputTime} todoItems={todoItems} setTodoItems={setTodoItems} />
        </div>
    );
}

export default App;
