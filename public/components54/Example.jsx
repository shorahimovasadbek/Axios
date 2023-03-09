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
    this.boshqaFunck = this.boshqaFunck.bind(this)
  }

  getUser() {
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
        this.setState({ mass: ress.data })
      })
      .catch(err => {
        console.log(err);
      })

  }

  componentDidMount() {
    this.getUser()
  }


  boshqaFunck(malumot){
    this.setState({status: !this.state.status})
    this.setState({son: malumot})
  }

  render() {
    return (
      <div>
        {
          (this.state.status) ?
            <div className='row'>
              {/* <input type="text" className='form-control' placeholder='name' onInput={(val) => this.setState({ val1: val.target.value })} />
              <input type="text" className='form-control' placeholder='id' onInput={(val) => this.setState({ val2: val.target.value })} /> <br /> */}
              {
                this.state.mass.map((item, index) => {
                  return (
                    <div className='col-4 my-3' key={index}>
                      <h1>Qalesila</h1>
                      <div className="card">
                        <img src={item.avatar} alt="img" />
                        <button className='btn btn-success' onClick={() => this.boshqaFunck(item)}>Learn more</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            :
            <Success both={this.state.son} />
        }
      </div>
    )
  }
}
