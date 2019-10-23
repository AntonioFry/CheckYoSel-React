import React, { Component } from 'react';
import Todos from '../../Components/Todos/Todos';
import { connect } from 'react-redux';
import './TodosContainer.css'

class TodosContainer extends Component {


  render() {
    const formattedTodos = this.props.todos.map(todo => {
      return (
        <Todos taskName={todo.taskName} tasks={todo.tasks}/>
      )
    })
    return (
      <section className="todos-section">
        {this.props.todos.length ? formattedTodos : null}
      </section>
    )
  }
}

const mapStateToProps = (store) => ({
  todos: store.todos
})

export default connect(mapStateToProps)(TodosContainer);