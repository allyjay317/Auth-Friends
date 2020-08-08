import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

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
        <Button onClick={props.login}>Log In</Button>
      </form>
    </div>
  )
}

export default Login