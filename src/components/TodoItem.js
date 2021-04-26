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
                {text}: <br /> <span className="taskTime">{time} Minutes</span>
            </li>{" "}
            <div className={`todo-item ${todo.completed ? "hideDiv" : ""}`}>
                <button onClick={() => setModalIsOpen(true)}>Start Task</button>
                <button onClick={completeHandler}>Completed</button>
            </div>
            <button onClick={deleteHandler}>Remove</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <button onClick={() => setModalIsOpen(false)}>X</button>
                <p>Task Time: {time} Minutes</p>

                <Timer initialTime={setTime} startImmediately={true} direction="backward" lastUnit="m">
                    {({ start, resume, pause, stop, reset }) => (
                        <React.Fragment>
                            <div>
                                <p>
                                    Time remaining:{" "}
                                    <span>
                                        <Timer.Minutes /> minutes
                                        <Timer.Seconds /> seconds
                                    </span>
                                </p>
                            </div>
                            <br />
                            <div>
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
