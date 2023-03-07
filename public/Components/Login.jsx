import React, { Component } from 'react'

export default class Login extends Component {
  constructor(){
    super()
    this.state = {
      val1: '',
      val2: ''
    }
  }
  render() {
    return (
      <div>
        <p><input type="text" className='form-control' onInput={(val) => this.setState({val1: val.target.value})} placeholder='name' /></p>
        <p><input type="text" className='form-control' onInput={(val) => this.setState({val2: val.target.value})} placeholder='password' /></p>
        <button className='btn btn-success' onClick={() => this.props.onClick(this.state.val1, this.state.val2)}>Registor</button>
      </div>
    )
  }
}
