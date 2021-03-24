import React, { Component } from 'react';
import Todos from '../../Components/Todos/Todos';
import { connect } from 'react-redux';
import './TodosContainer.css'

class TodosContainer extends Component {
  render() {
    const { urgentTodosVisibility, todos } = this.props;
    let formattedTodos;
    
    const allTodos = todos.map(todo => {
      return (
        <Todos taskName={todo.taskName} tasks={todo.tasks} id={todo.id} urgent={todo.urgent}/>
      )
    });

    const filteredUrgentTodos = todos.filter(todo => {
      return todo.urgent === true;
    })
    
    const formattedUrgentTodos = filteredUrgentTodos.map(todo => {
      return <Todos taskName={todo.taskName} tasks={todo.tasks} id={todo.id} urgent={todo.urgent} />
    });

    urgentTodosVisibility === true ? formattedTodos = formattedUrgentTodos : formattedTodos = allTodos;

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