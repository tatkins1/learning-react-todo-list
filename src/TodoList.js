import React from 'react'
import {TodoItem} from './TodoItem.js';

export function TodoList(props) {
    const todos = props.todos;
    const toggleTodo = props.toggleTodo;
    return (
      <>
        <p>List Items</p>
        <ul>
          {todos.map(todo => <TodoItem toggleTodo={toggleTodo} key={todo.id} todo={todo} />)}
        </ul>
      </>
    )
  }
