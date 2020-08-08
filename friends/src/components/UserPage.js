import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Grid, Button } from '@material-ui/core'
import FriendCard from './FriendCard'
import { useHistory } from 'react-router-dom'

const UserPage = () => {

  const [friends, setFriends] = useState([])
  const history = useHistory()

  useEffect(() => {
    axiosWithAuth().get('/friends')
      .then(res => {
        console.log(res)
        setFriends(res.data)
      })
  }, [])

  return (
    <div>
      <Grid container spacing={2} justify='center'>
        {friends.map(friend => {
          return (<Grid item>
            <FriendCard data={friend} />
          </Grid>)
        })}
      </Grid>
      <Button onClick={() => history.push('/add')}>Add A Friend!</Button>
    </div>
  )

}
export default UserPage