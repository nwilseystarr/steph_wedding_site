import React, { Component } from 'react';
import Navbar from '../src/components/Navbar';
import './App.css';
import Carousel from './components/Carousel';
import Title from './components/Title';
import EventWedding from './components/EventWedding';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carousel />
        <Title />
        <EventWedding />
      </div>
    );
  }
}

export default App;
