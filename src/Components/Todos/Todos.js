import React, { Component } from 'react';
import { removeTodo, toggleUrgency } from  '../../Actions/index';
import { connect } from 'react-redux';
import './Todos.css';
import { TodoForm } from '../TodoForm/TodoForm';

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
    this.setState({ checked: newCheckedList }, function() {
      this.verifyAllChecked();
    });
  };

  verifyAllChecked = async () => {
    let completeChecks = true;
    this.state.checked.forEach(checkedTask => {
      if (checkedTask === false) {
        completeChecks = false;
      };
    });
    this.setState({ allChecked: completeChecks });
  };

  deleteTodo = (e) => {
    const { id, removeTodo } = this.props
    e.preventDefault();
    removeTodo(id);
  };

  toggleUrgent = (e) => {
    const { id, toggleUrgency } = this.props;
    e.preventDefault();
    toggleUrgency(id);
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
          <button className="todo-buttons" onClick={(e) => this.toggleUrgent(e)}>⚡️</button>
          <button className="todo-buttons" disabled={!this.state.allChecked} onClick={(e) => this.deleteTodo(e)}>❌</button>
        </div>
      </article>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeTodo: todoId => dispatch(removeTodo(todoId)),
  toggleUrgency: (todoId, urgency) => dispatch(toggleUrgency(todoId, urgency))
});

export default connect(null, mapDispatchToProps)(Todos);