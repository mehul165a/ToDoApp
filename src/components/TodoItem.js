import { useState } from 'react';

const TodoItem = ({ todo, onUpdate }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleComplete = () => {
    onUpdate({ ...todo, isCompleted: !todo.isCompleted });
  };

  return (
    <div>
      <div onClick={toggleExpand}>
        <h3>{todo.title}</h3>
        <button onClick={toggleComplete}>
          {todo.isCompleted ? 'Mark as Incomplete' : 'Mark as Done'}
        </button>
      </div>
      {isExpanded && (
        <div>
          <p>{todo.details}</p>
          <p>Last Updated: {new Date(todo.lastUpdated).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
