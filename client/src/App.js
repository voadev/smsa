import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReturnedData from './ReturnedData';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Social Media Sentiment Analysis App</p>
        
      </header>
      <ReturnedData />
    </div>
  );
}

export default App;
