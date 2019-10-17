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
    return (
      <form>
        <input
          type="text"
          name={taskName}
          className="todo-form-input"
        />
        <label for={taskName}>Task Name</label>
        <input
          type="text"
          name={tasks}
          className="todo-form-input"
        />
        <label for={tasks}>Tasks</label>
      </form>
    )
  }
}

export default TodoForm;