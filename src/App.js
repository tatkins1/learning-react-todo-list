import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from './TodoList';

const STORAGE_KEY = 'todos';
export default function App(props) {
  const inputEl = useRef(null);
  const [todos, setTodos] = useState([]);

  // UseEffect calls function on initialize and whenever state changes.
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (storedTodos?.length) setTodos(storedTodos);
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])


  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.isComplete = !todo.isComplete;
    setTodos(newTodos);
  }

  const addTodo = () => {
    if (!inputEl.current.value) return;
    setTodos([...todos, { id: uuidv4(), title: inputEl.current.value, isComplete: false }]);
    inputEl.current.value = '';
  };

  const clearTodos = () => {
    const incompleteTodoItems = todos.filter(todo => !todo.isComplete);
    setTodos(incompleteTodoItems);
  }
  return (
    <div style={{ padding: 10 }}>
      <h1 className="title">Todo List App</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <br />
      <label>Type your Todo</label>
      <input className="input" ref={inputEl} type="text" />
      <button
        className="button is-primary"
        onClick={addTodo}
      >Add Todo</button>

      <button onClick={clearTodos} className="button is-link">Clear Todos</button>
      <p>You have {todos.filter(todo => !todo.isComplete).length} Todos left</p>
    </div>
  )
}






