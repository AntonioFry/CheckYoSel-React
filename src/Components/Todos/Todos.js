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

  componentDidMount() {
    const { tasks } = this.props;
    const checkedArray = tasks.map(task => {
      return task.checked;
    });
    this.setState({ checked: checkedArray });
  }

  toggleCheckedStatus = (e) => {
    const checkboxId = e.target.getAttribute('data-checkbox-id');
    const checkedStatus = e.target.checked;
    let newCheckedList = this.state.checked;
    newCheckedList[checkboxId] = checkedStatus;
    this.setState({ checked: newCheckedList });
  }

  render() {
    const { tasks, taskName } = this.props

    const formattedTasks = tasks.map((task, index) => {
      return (
        <div>
          <input data-checkbox-id={`${index}`} type="checkbox" checked={this.state.checked[index]} onChange={(e) => this.toggleCheckedStatus(e)}/>
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