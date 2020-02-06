import React, { Component } from 'react';

import './App.css';

let column = [];
let row = [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: 1,
      height: 1,
      count: 1,
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

  draw() {
    column = Array(this.state.height).fill(<div id="tile"></div>);
    row = Array(this.state.width).fill(<div id="tile"></div>);
    console.log(column)
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
          {column.map(x => {
            return <div class="column">{column}</div>
          })}

        </div>
      </div>
    );
  }
}

export default App;
