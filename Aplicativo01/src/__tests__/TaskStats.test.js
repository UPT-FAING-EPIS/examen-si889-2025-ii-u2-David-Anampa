import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskStats from '../components/TaskStats';

describe('TaskStats Component', () => {
  test('does not render when no tasks', () => {
    const { container } = render(<TaskStats tasks={[]} />);
    expect(container.firstChild).toBeNull();
  });

  test('shows correct statistics for mixed tasks', () => {
    const tasks = [
      { id: 1, text: 'Tarea 1', completed: false },
      { id: 2, text: 'Tarea 2', completed: true },
      { id: 3, text: 'Tarea 3', completed: true },
      { id: 4, text: 'Tarea 4', completed: false }
    ];

    render(<TaskStats tasks={tasks} />);
    
    expect(screen.getByText('Estadísticas')).toBeInTheDocument();
    expect(screen.getByText('Total: 4')).toBeInTheDocument();
    expect(screen.getByText('Completadas: 2')).toBeInTheDocument();
    expect(screen.getByText('Pendientes: 2')).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  test('shows 100% completion when all tasks completed', () => {
    const tasks = [
      { id: 1, text: 'Tarea 1', completed: true },
      { id: 2, text: 'Tarea 2', completed: true }
    ];

    render(<TaskStats tasks={tasks} />);
    
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('Pendientes: 0')).toBeInTheDocument();
  });

  test('shows 0% completion when no tasks completed', () => {
    const tasks = [
      { id: 1, text: 'Tarea 1', completed: false },
      { id: 2, text: 'Tarea 2', completed: false }
    ];

    render(<TaskStats tasks={tasks} />);
    
    expect(screen.getByText('0%')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument(); // Completed tasks
  });

  test('shows correct labels', () => {
    const tasks = [
      { id: 1, text: 'Tarea 1', completed: true }
    ];

    render(<TaskStats tasks={tasks} />);
    
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('Completadas')).toBeInTheDocument();
    expect(screen.getByText('Pendientes')).toBeInTheDocument();
    expect(screen.getByText('Progreso')).toBeInTheDocument();
  });
});