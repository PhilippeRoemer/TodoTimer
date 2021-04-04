import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todoItems, setTodoItems }) {
    return (
        <div>
            <ul>
                {todoItems.map((todo) => (
                    <TodoItem key={todo.id} text={todo.text} time={todo.time} todo={todo} todoItems={todoItems} setTodoItems={setTodoItems} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
