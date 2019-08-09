import React, { Component } from 'react'
import "./Rules.css"

export default class Rules extends Component {
  render() {
    return (
      <div className="rules">
        <h1>Rules are:</h1>
        <h3>Tap on a cell to flip the cell state adjacent to it both in horizontal and vertical direction</h3>
        <h3>Tapped cell itself flips its state </h3>
        <h3>Make all the cells dark to win the game</h3>
        <h3>Enjoy!</h3>
      </div>
    )
  }
}
