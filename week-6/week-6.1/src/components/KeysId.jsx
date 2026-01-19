import { useState } from "react";

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      // Each todo item needs a unique key
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a Todo App' },
    { id: 3, text: 'Deploy to production' },
  ]);

  const addTodo = () => {
    // Simulating adding a new Todo
    const newTodo = { id: todos.length + 1, text: 'New Todo' };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoApp;
