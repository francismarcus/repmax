import React, { Component } from 'react';
import Input from './input';
import Header from './header';
import './App.css'

class App extends Component {
  render() {
    return (
      <div class="Container">
        <Header />
        <Input />
      </div>
    );
  }
}

export default App;
