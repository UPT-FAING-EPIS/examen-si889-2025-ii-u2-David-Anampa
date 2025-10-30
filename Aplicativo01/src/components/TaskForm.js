import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const TaskForm = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(inputValue);
    setInputValue('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Escribe una nueva tarea..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        maxLength={100}
      />
      <button type="submit" className="add-button" disabled={!inputValue.trim()}>
        <Plus size={20} />
        Agregar
      </button>
    </form>
  );
};

export default TaskForm;