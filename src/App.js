import React from 'react';
import TodoList from './components/TodoList';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
};

export default App;
