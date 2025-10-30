import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders task manager title', () => {
    render(<App />);
    expect(screen.getByText('Task Manager')).toBeInTheDocument();
    expect(screen.getByText('Organiza tus tareas de manera eficiente')).toBeInTheDocument();
  });

  test('shows empty state when no tasks', () => {
    render(<App />);
    expect(screen.getByText('¡Todo listo!')).toBeInTheDocument();
    expect(screen.getByText(/No tienes tareas pendientes/)).toBeInTheDocument();
  });

  test('can add a new task', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Escribe una nueva tarea...');
    const addButton = screen.getByText('Agregar');

    fireEvent.change(input, { target: { value: 'Nueva tarea de prueba' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Nueva tarea de prueba')).toBeInTheDocument();
    expect(screen.getByText('Tareas Pendientes (1)')).toBeInTheDocument();
  });

  test('can toggle task completion', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Escribe una nueva tarea...');
    const addButton = screen.getByText('Agregar');

    fireEvent.change(input, { target: { value: 'Tarea para completar' } });
    fireEvent.click(addButton);

    const checkbox = screen.getByRole('button', { name: /task-checkbox/ });
    fireEvent.click(checkbox);

    expect(screen.getByText('Completadas (1)')).toBeInTheDocument();
  });

  test('can delete a task', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Escribe una nueva tarea...');
    const addButton = screen.getByText('Agregar');

    fireEvent.change(input, { target: { value: 'Tarea para eliminar' } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByTitle('Eliminar tarea');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Tarea para eliminar')).not.toBeInTheDocument();
    expect(screen.getByText('¡Todo listo!')).toBeInTheDocument();
  });

  test('shows task statistics', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Escribe una nueva tarea...');
    const addButton = screen.getByText('Agregar');

    fireEvent.change(input, { target: { value: 'Tarea 1' } });
    fireEvent.click(addButton);
    
    fireEvent.change(input, { target: { value: 'Tarea 2' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Estadísticas')).toBeInTheDocument();
    expect(screen.getByText('Total: 2')).toBeInTheDocument();
  });
});