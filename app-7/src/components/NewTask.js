import React, { Component } from 'react'

class NewTask extends Component {
    constructor() {
        super();

        this.state = {
            added: ''
        }

    }

    handleChange(val) {
        this.setState({ added: val })
    }

    storeAdded() {
        this.props.add(this.state.added)
        this.setState({ added: ''})
    }

  render() {
    return (
      <div>
        <input 
        value={this.state.added}
        placeholder="New to do item"
        onChange={e => this.handleChange(e.target.value)} />
        <button onClick={() => this.storeAdded()}>Add Item</button>
      </div>
    )
  }
}

export default NewTask
