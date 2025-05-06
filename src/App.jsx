// src/App.jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter-container">
      <h1>React Counter</h1>
      <div className="counter-display">{count}</div>
      <div className="counter-controls">
        <button onClick={decrement} className="counter-button decrement">-</button>
        <button onClick={reset} className="counter-button reset">Reset</button>
        <button onClick={increment} className="counter-button increment">+</button>
      </div>
    </div>
  );
}

export default App;