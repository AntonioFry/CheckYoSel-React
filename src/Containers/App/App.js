import React, { Component } from 'react';
import { Header } from '../../Components/Header/Header';
import { Aside } from '../../Components/Aside/Aside';
import './App.css';

class App extends Component {


  render() {
    return (
      <main>
        <Header />
        <Aside />
      </main>
    );
  }
}

export default App;
