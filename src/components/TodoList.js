import { useState, useEffect } from 'react';
import TodoItem from './TodoItem'; 
import TodoForm from './TodoForm'; 
import { fetchTodos, saveTodos } from '../utils/storage';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTasks(fetchTodos());
  }, []);

  const saveTask = (task) => {
    const updatedTasks = task.id
      ? tasks.map((t) => (t.id === task.id ? { ...task, lastUpdated: new Date().toISOString() } : t))
      : [...tasks, { ...task, id: tasks.length + 1, lastUpdated: new Date().toISOString() }];

    setTasks(updatedTasks);
    saveTodos(updatedTasks);
    setCurrentTask(null);
  };

  const handleUpdate = (task) => {
    const updatedTasks = tasks.map((t) => (t.id === task.id ? task : t));
    setTasks(updatedTasks);
    saveTodos(updatedTasks);
  };

  const filterTasks = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm) ||
      task.details.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <input type="text" placeholder="Search Tasks" onChange={filterTasks} />
      <TodoForm currentTask={currentTask} onSave={saveTask} />
      {filteredTasks.map((task) => (
        <TodoItem key={task.id} task={task} onUpdate={handleUpdate} />
      ))}
    </div>
  );
};

export default TodoList;
