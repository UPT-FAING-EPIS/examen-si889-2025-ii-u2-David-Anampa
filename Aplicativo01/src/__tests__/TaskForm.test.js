import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskForm from '../components/TaskForm';

describe('TaskForm Component', () => {
  test('renders input and button', () => {
    const mockOnAddTask = jest.fn();
    render(<TaskForm onAddTask={mockOnAddTask} />);
    
    expect(screen.getByPlaceholderText('Escribe una nueva tarea...')).toBeInTheDocument();
    expect(screen.getByText('Agregar')).toBeInTheDocument();
  });

  test('calls onAddTask when form is submitted', () => {
    const mockOnAddTask = jest.fn();
    render(<TaskForm onAddTask={mockOnAddTask} />);
    
    const input = screen.getByPlaceholderText('Escribe una nueva tarea...');
    const button = screen.getByText('Agregar');
    
    fireEvent.change(input, { target: { value: 'Nueva tarea' } });
    fireEvent.click(button);
    
    expect(mockOnAddTask).toHaveBeenCalledWith('Nueva tarea');
  });

  test('clears input after submission', () => {
    const mockOnAddTask = jest.fn();
    render(<TaskForm onAddTask={mockOnAddTask} />);
    
    const input = screen.getByPlaceholderText('Escribe una nueva tarea...');
    const button = screen.getByText('Agregar');
    
    fireEvent.change(input, { target: { value: 'Nueva tarea' } });
    fireEvent.click(button);
    
    expect(input.value).toBe('');
  });

  test('button is disabled when input is empty', () => {
    const mockOnAddTask = jest.fn();
    render(<TaskForm onAddTask={mockOnAddTask} />);
    
    const button = screen.getByText('Agregar');
    expect(button).toBeDisabled();
  });

  test('button is enabled when input has text', () => {
    const mockOnAddTask = jest.fn();
    render(<TaskForm onAddTask={mockOnAddTask} />);
    
    const input = screen.getByPlaceholderText('Escribe una nueva tarea...');
    const button = screen.getByText('Agregar');
    
    fireEvent.change(input, { target: { value: 'Texto' } });
    expect(button).not.toBeDisabled();
  });

  test('does not submit empty or whitespace-only tasks', () => {
    const mockOnAddTask = jest.fn();
    render(<TaskForm onAddTask={mockOnAddTask} />);
    
    const input = screen.getByPlaceholderText('Escribe una nueva tarea...');
    const button = screen.getByText('Agregar');
    
    fireEvent.change(input, { target: { value: '   ' } });
    expect(button).toBeDisabled();
  });
});