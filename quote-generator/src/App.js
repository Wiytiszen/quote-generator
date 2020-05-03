import React from 'react';
import './App.css';
import Quote from './components/Quote';

function App() {
  const  quote = `Intuitive design happens when current knowledge is the same as the target knowledge.`
  return (
    <div className="wrapper">
      <h2 className= "header"> Random <span>Quote</span> Generator</h2>
      <Quote quote={quote}/>
    </div>
  );
}

export default App;
