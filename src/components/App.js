import React, { Component } from 'react';
import Input from './input';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Input />
      </div>
    );
  }
}

export default App;
