import Button from "./Button";
import styles from "./module.css";
import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/v1/post/")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
    console.log(coins);
  }, []);

  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.results.map((coin) => (
            <option>{coin.title}</option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
