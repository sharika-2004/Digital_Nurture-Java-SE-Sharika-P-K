import React, { useState } from "react";
import "./App.css";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    alert("Hello! Static Message");
  }

  function decrement() {
    setCount(count - 1);
  }

  function sayWelcome(message) {
    alert(message);
  }

  function onPress() {
    alert("I was clicked");
  }

  return (
    <div className="App">

      <h3>{count}</h3>

      <button onClick={increment}>Increment</button>
      <br />

      <button onClick={decrement}>Decrement</button>
      <br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say welcome
      </button>
      <br />

      <button onClick={onPress}>
        Click on me
      </button>

      <CurrencyConvertor />

    </div>
  );
}

export default App;