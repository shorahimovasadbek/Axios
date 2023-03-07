import React, { Component } from 'react'
import Axios from 'axios'
import Success from './Success'

export default class Example extends Component {
  constructor() {
    super()
    this.state = {
      status: true,
      val1: null,
      val2: null,
      mass: [],
      son: {}
    }
    this.getUser = this.getUser.bind(this)
  }

  getUser() {
    this.state.mass.map((item, index) => {
      if(item.name == this.state.val1 && item.id == this.state.val2){
        this.setState({status: !this.state.status})
        this.setState({son: item})
      }
    })


    // fetch('https://638484053fa7acb14ff6ea66.mockapi.io/AddUser')
    // .then((ress) => {
    //   console.log(ress.json());
    // })
    // .catch((err) => {
    //   console.log(err.json());
    // })

    Axios.get('https://638484053fa7acb14ff6ea66.mockapi.io/AddUser')
      .then(ress => {
        console.log(ress.data);
        this.setState({mass: ress.data})
      })
      .catch(err => {
        console.log(err);
      })
  
  }

 componentDidMount(){
  this.getUser()
 }


  render() {
    return (
      <div>
        {
          (this.state.status) ?
            <div>
              <input type="text" className='form-control' placeholder='name' onInput={(val) => this.setState({ val1: val.target.value })} />
              <input type="text" className='form-control' placeholder='id' onInput={(val) => this.setState({ val2: val.target.value })} /> <br />
              <button className='btn btn-success' onClick={this.getUser}>getUsers</button>
            </div>
            :
            <Success both = {this.state.son}/>
        }
      </div>
    )
  }
}
