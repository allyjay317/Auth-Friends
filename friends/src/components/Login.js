import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useHistory, Redirect } from 'react-router-dom'

const Login = (props) => {

  const [credentails, setCredentials] = useState({
    username: '',
    password: '',
  })

  const handleChanges = e => {
    setCredentials({
      ...credentails,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.login(credentails)
  }

  if (localStorage.getItem('loginToken')) {
    return (
      <Redirect to='/userpage' />
    )
  }

  return (
    <div>
      <form style={{ display: 'flex', flexFlow: 'column', width: '50%', marginLeft: '25%' }}>
        <TextField
          name='username'
          label='Username'
          value={credentails.username}
          onChange={handleChanges}
        />
        <TextField
          name='password'
          label='Password'
          password={credentails.password}
          onChange={handleChanges}
        />
        <Button onClick={handleSubmit}>Log In</Button>
      </form>
      {props.error && <p style={{ color: 'red' }}>{props.error}</p>}
    </div>
  )
}

export default Login