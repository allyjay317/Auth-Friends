import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const Add = () => {
  const [newFriend, setNewFriend] = useState({
    name: '',
    age: null,
    email: ''
  })
  const history = useHistory()

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth().post('/friends', newFriend)
      .then(res => {
        console.log(res)
        history.push('/userpage')
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField name='name' label='name' value={newFriend.name} onChange={handleChange} />
        <TextField name='age' label='age' value={newFriend.age} onChange={handleChange} />
        <TextField name='email' label='email' value={newFriend.email} onChange={handleChange} />
      </form>
      <Button onClick={handleSubmit} >Add!</Button>
    </div>
  )
}

export default Add