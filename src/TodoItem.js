import React from 'react'
import './TodoItem.css'

export function TodoItem(props) {
    const todo = props.todo;
    const toggleTodo = props.toggleTodo;
    return (
      <li>
        <div>
          <label>
            <input type="checkbox" checked={todo.isComplete} onChange={() => {
              toggleTodo(todo.id);
            }} />

            <span style={{padding:10 }}>{todo.title}</span>
          </label>
        </div>
      </li>
    )
  }