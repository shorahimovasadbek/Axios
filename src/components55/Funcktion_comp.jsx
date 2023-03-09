import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Funcktion_comp() {

  const [mass, setMass] = useState([])
  const [mass1, setMass1] = useState([])
  // const [val, setVal] = useState('')

  // console.log(mass, val, 'men keldim');

  useEffect(() => {
    getUser()
  }, [])

  async function getUser() {
    await axios.get('https://638484053fa7acb14ff6ea66.mockapi.io/AddUser')
      .then(ress => {
        setMass(ress.data)
        setMass1(ress.data)
      })
      .catch(err => {
        console.log(err);
      })
  }

  function Search(val){
    let result = mass.filter(item => {
      return item.name.toLowerCase().includes(val.toLowerCase())
    })
    setMass1(result)
  }

  return (
    <div>
      <input type="text" onInput={(val) => Search(val.target.value)} />
      <div className='row g-0'>
        {
          (mass1) ? mass1.map((item, index) => {
            return (
              <div className='col-4 my-3' key={index}>
                <img src={item.avatar} alt="img" />
                <h4>{item.name}</h4>
              </div>
            )
          })
            :
            alert('error')
        }
      </div>
    </div>
  )
}
