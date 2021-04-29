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
                <div>
                    {text} <br /> <span className="taskTime">{time} Minutes</span>
                </div>
                <div className={`todo-item-hide ${todo.completed ? "hideDiv" : ""}`}>
                    <button onClick={() => setModalIsOpen(true)} className="buttonStartTask">
                        Start Task
                    </button>
                </div>
                <div className={`todo-item-hide ${todo.completed ? "" : "hideDiv"}`}>
                    <button className="buttonCompleteList">Task Completed</button>
                </div>
                <button onClick={deleteHandler} className="buttonRemove">
                    Remove
                </button>
            </li>{" "}
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className={"modalCustomStyle"}>
                <button onClick={() => setModalIsOpen(false)} className="buttonClose">
                    X
                </button>
                <p className="textCenter">
                    <b>Task Time:</b> {time} Minutes
                </p>
                <br />
                <Timer initialTime={setTime} startImmediately={true} direction="backward" lastUnit="m">
                    {() => (
                        <React.Fragment>
                            <div>
                                <p className="textCenter">
                                    <b>Time remaining:</b> <Timer.Minutes /> minutes <Timer.Seconds /> seconds
                                </p>
                            </div>
                            <br />
                            <div>
                                <button onClick={completeHandler} className="buttonComplete">
                                    Completed
                                </button>
                            </div>
                        </React.Fragment>
                    )}
                </Timer>
            </Modal>
        </div>
    );
}

export default TodoItem;
