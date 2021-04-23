import React, { useState } from "react";
import Modal from "react-modal";
import Timer from "react-compound-timer";

function TodoItem({ text, time, todo, todoItems, setTodoItems }) {
    const deleteHandler = () => {
        setTodoItems(todoItems.filter((element) => element.id !== todo.id));
    };

    const completeHandler = () => {
        setTodoItems(
            todoItems.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };

    const setTime = time * 60000;

    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text} <span>Task Time:{time}</span>
            </li>
            <button onClick={completeHandler}>
                <i>Complete</i>
            </button>
            <button onClick={deleteHandler}>
                <i>Delete</i>
            </button>
            <button onClick={() => setModalIsOpen(true)}>Start Task</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <p>Task Time:{time}</p>
                <button onClick={() => setModalIsOpen(false)}>Close</button>
                <Timer initialTime={setTime} startImmediately={false} direction="backward">
                    {({ start, resume, pause, stop, reset, timerState }) => (
                        <React.Fragment>
                            <div>
                                <Timer.Hours /> hours
                                <Timer.Minutes /> minutes
                                <Timer.Seconds /> seconds
                            </div>
                            <div>{timerState}</div>
                            <br />
                            <div>
                                <button onClick={start}>Start</button>
                                <button onClick={pause}>Pause</button>
                                <button onClick={resume}>Resume</button>
                                <button onClick={stop}>Stop</button>
                                <button onClick={reset}>Reset</button>
                            </div>
                        </React.Fragment>
                    )}
                </Timer>
            </Modal>
        </div>
    );
}

export default TodoItem;
