import React, { Component } from 'react';

import './App.css';

let tiles = ['floor', 'wall'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: 1,
      height: 1,
      count: 1,
      floorMap: [
        [this.random(2)]
      ]
    }
  }

  handleChange(evt) {
    if (evt.target.name === "height") {
      this.setState({
        height: parseInt(evt.target.value),
      })
    };
    if (evt.target.name === "width") { this.setState({ width: parseInt(evt.target.value) })};
    if (evt.target.name === "count") { this.setState({ count: parseInt(evt.target.value) })};
  }

  handleSubmit(evt) {
    if (evt.target.name === "submit") {

    }
  }

  makeTile() {
    return <div class="column" id={tiles[this.random(2)]}></div>
  }

  draw() {
    // If Column is pressed, one array is added to floorMap
    if (this.state.floorMap.length !== this.state.width) {
      this.state.floorMap.push(new Array(this.state.height))

    }
    // if Row is pressed, one item is pushed to each array of floorMap
    if (this.state.floorMap[0].length !== this.state.height) {
      this.state.floorMap.forEach(t => {
        t.push(this.random(2));
      })
    }
    console.log(this.state.floorMap)
  }

  random(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }


  render() {
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
          <button type="submit" name="submit">Submit</button>
        </div>
        <div id="dungeon_output">
          {this.draw()}
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
