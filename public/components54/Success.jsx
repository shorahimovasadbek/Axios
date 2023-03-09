import React, { Component } from 'react'
import Example from './Example'

export default class Success extends Component {
  constructor() {
    super()
    this.state = {
      status: true
    }
    this.back = this.back.bind(this)
  }

  back() {
    this.setState({ status: !this.state.status })
  }

  render() {
    return (
      <div>
        {
          (this.state.status) ?
            <>
              <img src={this.props.both.avatar} alt="" />
              <p>{this.props.both.name}</p>
              <p>{this.props.both.id}</p>
              <p>{this.props.both.createdAt}</p>
              <button className='btn btn-danger' onClick={this.back}>Back home</button>
            </>
            :
            <Example />
        }
      </div>
    )
  }
}
