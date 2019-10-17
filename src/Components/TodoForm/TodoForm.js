import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
  
  constructor() {
    super();
    this.state = {
      todo: {
        taskName: '',
        tasks: []
      }
    };
  }

  render() {
    const { taskName, tasks } = this.state.todo
    const formmattedTasks = tasks.map(task => {
      return (
        <div className="working-task">
          <button>❌</button>
          <p>{task}</p>
        </div>
      )
    })
    return (
      <form className="todo-form">
        <label className="todo-form-label" for={taskName}>Task Name</label>
        <input
          type="text"
          name={taskName}
          className="todo-form-input"
        />
        <label className="todo-form-label" for={tasks}>Tasks</label>
        <input
          type="text"
          name={tasks}
          className="todo-form-input"
        />
        <section className="working-tasks">
          {tasks.length ? formmattedTasks : null}
        </section>
      </form>
    )
  }
}

export default TodoForm;