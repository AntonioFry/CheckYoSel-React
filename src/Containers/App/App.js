import React, { Component } from 'react';
import { Header } from '../../Components/Header/Header';
import { Aside } from '../../Components/Aside/Aside';
import TodosContainer from '../TodosContainer/TodosContainer'
import './App.css';

class App extends Component {

  render() {
    return (
      <main>
        <Header />
        <Aside />
        <TodosContainer />
      </main>
    );
  }
}

export default App;
