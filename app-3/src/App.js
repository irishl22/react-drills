import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      list: ["dogs", "cats", "birds", "cows"]
    }
  }

  handleChange(val) {
    this.setState({ text: val })
  } 

  render() {
    let newList = this.state.list.filter((element, index) => {
      return element.includes(this.state.text)
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })

    return (
      <div className="App">
      <input onChange={ (e) => this.handleChange(e.target.value)} type="text" />
       {newList}
      </div>
    );
  }
}

export default App;
