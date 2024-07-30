import { useState } from 'react';

const TodoForm = ({ currentTodo, onSave }) => {
  const [title, setTitle] = useState(currentTodo ? currentTodo.title : '');
  const [details, setDetails] = useState(currentTodo ? currentTodo.details : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...currentTodo, title, details });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo Title"
        required
      />
      <textarea
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Todo Details"
        required
      />
      <button type="submit">Save Todo</button>
    </form>
  );
};

export default TodoForm;
