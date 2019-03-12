import React, { Component } from 'react'

class Login extends Component {
  constructor() {
      super();

      this.state = {
          user: '',
          pass: ''
      }
  }

  handleChangeUser(val) {
      this.setState({user: val})
  }
  
  handleChangePass(val) {
      this.setState({pass: val})
  }

  handleClick() {
      return alert(`Logged in with ${this.state.user} and ${this.state.pass}`)
  }
  
  
    render() {
    return (
      <div>
        <input onChange={e => this.handleChangeUser(e.target.value)}></input>
        <input onChange={e => this.handleChangePass(e.target.value)} />
        <button onClick={() => this.handleClick()}>Login</button>
      </div>
    )
  }
}

export default Login
