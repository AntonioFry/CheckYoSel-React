import React from 'react';
import TodoForm from '../TodoForm/TodoForm';
import './Aside.css';

export const Aside = ({ changeTodosUrgentVisibility, urgentTodosVisibility }) => {
  let toggleStatus;
  urgentTodosVisibility ? toggleStatus = "ON" : toggleStatus = "OFF";
  return (
    <aside>
      <TodoForm />
  <button className='toggle-urgent-button' onClick={(e) => changeTodosUrgentVisibility(e)}>Toggle Urgent: {toggleStatus}</button>
    </aside>
  )
}