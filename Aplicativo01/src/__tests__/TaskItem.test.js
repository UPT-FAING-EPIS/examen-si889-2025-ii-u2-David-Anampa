import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskItem from '../components/TaskItem';

describe('TaskItem Component', () => {
  const mockTask = {
    id: 1,
    text: 'Tarea de prueba',
    completed: false
  };

  const mockCompletedTask = {
    id: 2,
    text: 'Tarea completada',
    completed: true
  };

  test('renders task text', () => {
    const mockOnToggle = jest.fn();
    const mockOnDelete = jest.fn();
    
    render(
      <TaskItem 
        task={mockTask} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    );
    
    expect(screen.getByText('Tarea de prueba')).toBeInTheDocument();
  });

  test('calls onToggle when checkbox is clicked', () => {
    const mockOnToggle = jest.fn();
    const mockOnDelete = jest.fn();
    
    render(
      <TaskItem 
        task={mockTask} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    );
    
    const checkbox = screen.getByRole('button', { name: /task-checkbox/ });
    fireEvent.click(checkbox);
    
    expect(mockOnToggle).toHaveBeenCalledWith(1);
  });

  test('calls onDelete when delete button is clicked', () => {
    const mockOnToggle = jest.fn();
    const mockOnDelete = jest.fn();
    
    render(
      <TaskItem 
        task={mockTask} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    );
    
    const deleteButton = screen.getByTitle('Eliminar tarea');
    fireEvent.click(deleteButton);
    
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

  test('shows completed state correctly', () => {
    const mockOnToggle = jest.fn();
    const mockOnDelete = jest.fn();
    
    render(
      <TaskItem 
        task={mockCompletedTask} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    );
    
    const taskItem = screen.getByText('Tarea completada').closest('li');
    expect(taskItem).toHaveClass('completed');
  });

  test('shows check icon when task is completed', () => {
    const mockOnToggle = jest.fn();
    const mockOnDelete = jest.fn();
    
    render(
      <TaskItem 
        task={mockCompletedTask} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    );
    
    const checkbox = screen.getByRole('button', { name: /task-checkbox/ });
    expect(checkbox).toHaveClass('checked');
  });
});