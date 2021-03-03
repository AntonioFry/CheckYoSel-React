import React, { Component } from 'react';
import { Header } from '../../Components/Header/Header';
import { Aside } from '../../Components/Aside/Aside';
import TodosContainer from '../TodosContainer/TodosContainer'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      urgentTodosVisibility: false,
    }
  }

  changeTodosUrgentVisibility = (e) => {
    e.preventDefault();
    this.setState({ urgentTodosVisibility: !this.state.urgentTodosVisibility });
    console.log(this.state.urgentTodosVisibility)
  }

  render() {
    return (
      <main>
        <Header />
        <Aside
          changeTodosUrgentVisibility={this.changeTodosUrgentVisibility}
        />
        <TodosContainer
          urgentTodosVisibility={this.state.urgentTodosVisibility}
        />
      </main>
    );
  }
}

export default App;
