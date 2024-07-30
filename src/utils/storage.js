import todosData from '../data/todos.json';

export const fetchTodos = () => {
  return todosData;
};

export const saveTodos = (todos) => {
  // This is a placeholder function. In a real app, this would save to a database.
  console.log('Todos saved', todos);
};
