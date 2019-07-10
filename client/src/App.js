import React from 'react';
import Navbar from '../src/components/Navbar';
import './App.css';
import Carousel from './components/Carousel';
import EventWedding from './components/EventWedding';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <EventWedding />
    </div>
  );
}

export default App;
