import React from 'react';
import { Check, Trash2 } from 'lucide-react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div
        className={`task-checkbox ${task.completed ? 'checked' : ''}`}
        onClick={() => onToggle(task.id)}
      >
        {task.completed && <Check size={14} />}
      </div>
      
      <span className="task-text">{task.text}</span>
      
      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
        title="Eliminar tarea"
      >
        <Trash2 size={16} />
      </button>
    </li>
  );
};

export default TaskItem;