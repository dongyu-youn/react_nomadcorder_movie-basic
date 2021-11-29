import Button from "./Button";
import styles from "./module.css";
import React, { useState, userEffect, useEffect } from "react";

function App() {
  const [minuates, setMinuates] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const onChange = (e) => {
    e.preventDefault();
    setMinuates(e.target.value);
  };
  const reset = () => setMinuates(0);
  const onFlip = () => setFlipped((current) => !current);

  return (
    <div>
      <h1>Super Converter</h1>
      <label htmlFor="minuates">Minutes</label>
      <input
        value={minuates}
        id="minuates"
        placeholder="Minuates"
        type="number"
        onChange={onChange}
        disabled={flipped === true}
      />
      <h4>You want to convert {minuates}</h4>
      <label htmlFor="hours">Minutes</label>
      <input
        value={flipped ? minuates : Math.round(minuates / 60)}
        id="hours"
        placeholder="Hours"
        type="number"
        onChange={onChange}
        disabled={flipped === false}
      />
      <button onClick={reset}>reset</button>
      <button onClick={onFlip}>flip</button>
    </div>
  );
}

export default App;
