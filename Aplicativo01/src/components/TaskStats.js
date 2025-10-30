import React from 'react';

const TaskStats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  if (totalTasks === 0) {
    return null;
  }

  return (
    <div className="stats">
      <h3 style={{ marginBottom: '15px', color: '#333' }}>Estadísticas</h3>
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-number">{totalTasks}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat-item">
          <span className="stat-number" style={{ color: '#28a745' }}>{completedTasks}</span>
          <span className="stat-label">Completadas</span>
        </div>
        <div className="stat-item">
          <span className="stat-number" style={{ color: '#ffc107' }}>{pendingTasks}</span>
          <span className="stat-label">Pendientes</span>
        </div>
        <div className="stat-item">
          <span className="stat-number" style={{ color: '#667eea' }}>{completionRate}%</span>
          <span className="stat-label">Progreso</span>
        </div>
      </div>
    </div>
  );
};

export default TaskStats;