import React, { Component } from 'react'
import Login from './Login'
import Success from './Success'

export default class Registor extends Component {
  constructor(){
    super()
    this.state = {
      status: false
    }

    this.getVal = this.getVal.bind(this)
  }

  getVal(name, password){
    if(name == 'Asadbek' && password == '123456'){
      this.setState({status: !this.state.status})
    }else{
      alert('login yoki parol xato')
    }
  }

  render() {
    return (
      <div>
        {
          (!this.state.status) && "Registor"
        }
        {
          (!this.state.status) ? <Login onClick={(name, password) => this.getVal(name, password)} /> : <Success/>
        }
      </div>
    )
  }
}
