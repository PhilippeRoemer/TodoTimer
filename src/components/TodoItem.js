import React from "react";

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
    return (
        <div>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}
                {time}
            </li>
            <button onClick={completeHandler}>
                <i>Complete</i>
            </button>
            <button onClick={deleteHandler}>
                <i>Delete</i>
            </button>
        </div>
    );
}

export default TodoItem;
