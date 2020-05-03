import React from 'react';
import './App.css';
import Quote from './components/Quote';

function App() {
  return (
    <div className="wrapper">
      <h2 className= "header"> Random <span>Quote</span> Generator</h2>
      <Quote/>
    </div>
  );
}

export default App;
