import React from "react";

function TodoForm({ inputText, setInputText, inputTime, setInputTime, todoItems, setTodoItems }) {
    function TodoTextInput(event) {
        setInputText(event.target.value);
    }

    function TodoTimeInput(event) {
        setInputTime(event.target.value);
    }

    function SubmitToDoHandler(event) {
        event.preventDefault();
        var textInput = document.getElementById("todo").value;
        var timeInput = document.getElementById("time").value;
        if (textInput === "" && timeInput === "") {
            alert("Fill out both fields");
        } else if (textInput === "") {
            alert("You forgot to enter a todo item");
        } else if (timeInput === "") {
            alert("You forgot to enter in the time");
        } else {
            setTodoItems([...todoItems, { text: inputText, time: inputTime, id: Math.random() * 10000 }]);
            setInputText("");
            setInputTime("");
        }
    }

    return (
        <div className="todoFormStyle">
            <h1 className="title">To-Do Timer</h1>
            <label>Enter To-Do</label>
            <input type="text" id="todo" name="todo" onChange={TodoTextInput} value={inputText}></input>
            <br />
            <label>Time to complete (in minutes)</label>
            <input type="number" id="time" name="time" onChange={TodoTimeInput} value={inputTime}></input>
            <br />
            <button type="submit" onClick={SubmitToDoHandler}>
                Submit
            </button>
        </div>
    );
}

export default TodoForm;
