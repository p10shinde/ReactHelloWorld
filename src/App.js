import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
    <Greet name="bruce"/> 
    <Welcome name="bruce wayne">
    <p>This Is children</p>
    </Welcome>
    <Hello />
    </div>
  );
}

export default App;
