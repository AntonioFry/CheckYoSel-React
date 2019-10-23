import React from 'react';
import './Todos.css';

const Todos = ({taskName, tasks}) => {
  const formattedTasks = tasks.map(task => {
    return (
      <div>
        <input type="checkbox" name={task}/>
        <label for={task.currentTask}>{task.currentTask}</label>
      </div>
    )
  })
  return (
    <article className="todo-box">
      <div className="todo-title-container">
        <h3>{taskName}</h3>
      </div>
      <form className="todo-tasks">
        {formattedTasks}
      </form>
      <div className="todo-buttons-container">
        <button className="todo-buttons">⚡️</button>
        <button className="todo-buttons">❌</button>
      </div>
    </article>
  )
}

export default Todos;