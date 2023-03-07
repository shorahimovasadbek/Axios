import React, { Component } from 'react'

export default class Success extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <img src={this.props.both.avatar} alt="" />
        <p>{this.props.both.name}</p>
        <p>{this.props.both.id}</p>
        <p>{this.props.both.createdAt}</p>
      </div>
    )
  }
}
