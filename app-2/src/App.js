import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: ["dogs", "cats", "birds", "cows"]
    }
  }
  
  
  render() {
    let newList = this.state.list.map( (element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
      {newList}
        
      </div>
    );
  }
}

export default App;
