import React from 'react';
import TaskItem from './TaskItem';
import { CheckCircle2, Trash2 } from 'lucide-react';

const TaskList = ({ tasks, onToggleTask, onDeleteTask, onClearCompleted }) => {
  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <CheckCircle2 size={64} />
        <h3>¡Todo listo!</h3>
        <p>No tienes tareas pendientes.<br />Agrega una nueva tarea para comenzar.</p>
      </div>
    );
  }

  return (
    <div>
      {pendingTasks.length > 0 && (
        <div>
          <h3 style={{ marginBottom: '15px', color: '#333', fontSize: '1.2rem' }}>
            Tareas Pendientes ({pendingTasks.length})
          </h3>
          <ul className="task-list">
            {pendingTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggleTask}
                onDelete={onDeleteTask}
              />
            ))}
          </ul>
        </div>
      )}

      {completedTasks.length > 0 && (
        <div style={{ marginTop: pendingTasks.length > 0 ? '30px' : '0' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '15px' 
          }}>
            <h3 style={{ color: '#28a745', fontSize: '1.2rem' }}>
              Completadas ({completedTasks.length})
            </h3>
            {completedTasks.length > 0 && (
              <button
                onClick={onClearCompleted}
                style={{
                  background: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.background = '#c82333'}
                onMouseOut={(e) => e.target.style.background = '#dc3545'}
              >
                <Trash2 size={16} />
                Limpiar
              </button>
            )}
          </div>
          <ul className="task-list">
            {completedTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggleTask}
                onDelete={onDeleteTask}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskList;