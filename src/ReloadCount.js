import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const resets = () => {
    setCount(0);
  };

  return (
    <>
      <div className="container col-8 my-5">
        <h1>Event occuring</h1>
        <p id="counterNum">Counter: {count}</p>
        <div className="row justify-content-evenly mt-5">
          <button className="btn btn-success col-2 mx-2" onClick={increment}>
            Increment
          </button>
          <button className="btn btn-primary col-2 mx-2" onClick={decrement}>
            Decrement
          </button>
          <button className="btn btn-danger mx-2 col-2 " onClick={resets}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
