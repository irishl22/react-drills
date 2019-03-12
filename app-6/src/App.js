import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo"

class App extends Component {
  constructor() {
    super();
    this.state = {
      added: '',
      list: []
    }
  }

  handleChange(val) {
    this.setState({ added: val})
  }
  
  storeAdded() {
    this.setState({
      list: [...this.state.list, this.state.added],
      added: ''
    })
  }


  render() {
      let newList = this.state.list.map((element, index) => {
        return <Todo key={index} listItem={element}/>
      })
    return (
      <div className="App">
        <h1>To do List:</h1>
        <input 
        value={this.state.added}
        placeholder="add new task"
        onChange={(e) => this.handleChange(e.target.value)}
        />
        <button onClick={() => this.storeAdded()}>Add Item</button>
        <p>{newList}</p>
      </div>
    )
  }
}

export default App;
