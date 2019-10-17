import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
  
  constructor() {
    super();
    this.state = {
      taskName: '',
      currentTask: '',
      tasks: []
    };
  }

  addTask = (e) => {
    e.preventDefault()
    const { tasks, currentTask } = this.state
    this.setState({ tasks: [...tasks, {currentTask, id: Date.now()}]})
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { taskName, tasks } = this.state
    const formmattedTasks = tasks.map(task => {
      return (
        <div key={task.id} className="working-task">
          <button>❌</button>
          <p className="working-task-text">{task.currentTask}</p>
        </div>
      )
    })
    return (
      <form className="todo-form">
        <label className="todo-form-label" htmlFor="taskName">Task Name</label>
        <input
          type="text"
          name="taskName"
          value={taskName}
          className="todo-form-input"
          onChange={(e) => this.handleChange(e)}
        />
        <label className="todo-form-label" htmlFor="currentTask">Tasks</label>
        <input
          type="text"
          name="currentTask"
          className="todo-form-input"
          onChange={(e) => this.handleChange(e)}
        />
        <button className="add-task-button" onClick={(e) => this.addTask(e)}>Add Task</button>
        <section className="working-tasks">
          {tasks.length ? formmattedTasks : null}
        </section>
      </form>
    )
  }
}

export default TodoForm;