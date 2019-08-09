import React, { Component } from "react";
import Board from "./Board";
import Rules from './Rules'
import "./App.css";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Board />
        <Rules />
      </div>
    );
  }
}

export default App;
