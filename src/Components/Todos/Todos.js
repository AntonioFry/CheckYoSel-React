import React, { Component } from 'react';
import './Todos.css';

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      checked: [],
      allChecked: false
    }
  }

  render() {
    const { tasks, taskName } = this.props

    const checkedArray = tasks.map(task => {
      return task.checked;
    });

    const formattedTasks = tasks.map((task, index) => {
      return (
        <div>
          <input data-id={index} type="checkbox" name={task}/>
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
}

export default Todos;