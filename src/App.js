import React, { Component } from 'react';

import './App.css';

let tiles = ['floor', 'wall'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: 100,
      height: 60,
      count: 1,
      floorMap: [
        [this.random(2)]
      ]
    }
  }

  handleChange(evt) {
    evt.preventDefault();
    if (evt.target.name === "height") {
      this.setState({
        height: parseInt(evt.target.value),
      })
    };
    if (evt.target.name === "width") { this.setState({ width: parseInt(evt.target.value) })};
    if (evt.target.name === "count") { this.setState({ count: parseInt(evt.target.value) })};
    this.fillBoard();
  }

  handleSubmit(evt) {
    if (evt.target.name === "reRoll") {
      this.reRoll();
    }
  }

  makeTile() {
    return <div id={tiles[this.random(2)]}></div>
  }

  fillX() {
    if (this.state.floorMap.length < this.state.width) {
      this.state.floorMap.push(new Array(this.state.height).fill(0).map(t => t += this.random(2)))
      this.fillX();
    }
  }

  fillY() {
    if (this.state.floorMap[0].length < this.state.height) {
      this.state.floorMap.forEach(t => {
        t.push(this.random(2));
      })
      this.fillY();
    }
  }

  fillBoard() {
    this.fillX();

    console.log(this.state.floorMap)
  }

  random(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  reRoll() {
    let newMap = [[1]];

    this.setState({ floorMap: newMap });
  }

  checkRules() {
  // RULES:
  // All borders must be Walls
  this.state.floorMap.map((t, idx) => {
    t[0] = 1;
    t[t.length - 1] = 1;
    return t;
  })
  // for floor, at least one touching tile must be a floor

}


  render() {
    this.fillBoard()
    console.log("rendered")
    return (
      <div className="App">
        <div id="dungeon_input">
          <label>Enter desired height:</label>
          <input type="number" name="height" id="height_input" onChange={this.handleChange.bind(this)} value={this.state.height} />
          <label>Enter desired width:</label>
          <input type="number" name="width" id="width_input" onChange={this.handleChange.bind(this)} value={this.state.width} />
          <label>Enter desired tile count:</label>
          <input type="number" name="count" id="count_input" onChange={this.handleChange.bind(this)} value={this.state.count} />
          <button name="reRoll" onClick={this.reRoll}>ReRoll</button>
        </div>
        <div id="dungeon_output">
          {this.state.floorMap.map(y => (
            <div className="column">
              {y.map(x => (
                <div className="tile" id={tiles[x]}></div>
              ))}
            </div>
          ))}

        </div>
      </div>
    );
  }
}

export default App;
