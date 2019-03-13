import React, { Component } from "react";
import "./App.css";
import NewTask from './components/NewTask'
import List from './components/List'


class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(val) {
    this.setState({ list: [...this.state.list, val] })
  }
  
  render() {
    return (
      <div className="App">
       <h1>To do list:</h1>
       <NewTask add={this.handleAdd}/>
       <List listItems={this.state.list}/>
      </div>
    );
  }
}

export default App;
