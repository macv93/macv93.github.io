import React from "react";
import "./App.css";
import rinnegan from "./rinnegan.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rinnegan} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://manuelcanarte.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Manny Cañarte
        </a>
      </header>
    </div>
  );
}

export default App;
