import React from 'react';
import Navbar from '../src/components/Navbar';
import './App.css';
import Carousel from './components/Carousel';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Title />
    </div>
  );
}

export default App;
