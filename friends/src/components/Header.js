import React, { useState, useEffect } from 'react'
import { Button, Typography } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'


const Header = () => {
  const [token, setToken] = useState(localStorage.getItem('loginToken') !== null)
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    setToken(localStorage.getItem('loginToken') !== null)
  }, [location])

  return (
    <div style={{ position: 'sticky', top: '0', width: '100%', height: '50px', backgroundColor: 'lightblue', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
      <ArrowBackIcon onClick={() => history.goBack()} />
      <Typography style={{ flexGrow: 1 }}>
        Friends!
      </Typography>
      {token && <Button onClick={() => {
        localStorage.removeItem('loginToken')
        history.push('/')
      }}>Log Out</Button>}
    </div>
  )
}

export default Header