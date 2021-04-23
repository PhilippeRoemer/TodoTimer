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
        setModalIsOpen(false);
    };

    const setTime = time * 60000;

    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}: <span>{time} Minutes</span>
            </li>{" "}
            <button onClick={() => setModalIsOpen(true)}>Start Task</button>
            <button onClick={completeHandler}>Completed</button>
            <button onClick={deleteHandler}>Remove</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <p>Task Time:{time} Minutes</p>
                <button onClick={() => setModalIsOpen(false)}>Close</button>

                <Timer initialTime={setTime} startImmediately={true} direction="backward" lastUnit="m">
                    {({ start, resume, pause, stop, reset }) => (
                        <React.Fragment>
                            <div>
                                <Timer.Minutes /> minutes
                                <Timer.Seconds /> seconds
                            </div>
                            <br />
                            <div>
                                <button onClick={start}>Start</button>
                                <button onClick={pause}>Pause</button>
                                <button onClick={resume}>Resume</button>
                                <button onClick={stop}>Stop</button>
                                <button onClick={reset}>Reset</button>
                                <button onClick={completeHandler}>Completed</button>
                            </div>
                        </React.Fragment>
                    )}
                </Timer>
            </Modal>
        </div>
    );
}

export default TodoItem;
