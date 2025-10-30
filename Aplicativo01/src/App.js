import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import './styles/index.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    if (taskText.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: taskText.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTasks([...tasks, newTask]);
    }
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Task Manager</h1>
          <p>Organiza tus tareas de manera eficiente</p>
        </header>
        
        <TaskForm onAddTask={addTask} />
        <TaskList 
          tasks={tasks} 
          onToggleTask={toggleTask} 
          onDeleteTask={deleteTask}
          onClearCompleted={clearCompleted}
        />
        <TaskStats tasks={tasks} />
      </div>
    </div>
  );
}

export default App;