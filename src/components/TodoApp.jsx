import React from "react";
import todoData from "./data";


function TodoApp() {
  return (
    <div>
        {todoData.map(todo =>(<div key={todo.id}>

        <input type="checkbox" checked={todo.completed}/>
        <span> {todo.text}</span>
        </div>))}
        </div>
  )
}

export default TodoApp;