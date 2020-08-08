import React, { useEffect, useState } from 'react'
import { Paper, Typography, Button, TextField, Grid } from '@material-ui/core'
import { useParams, useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const FriendPage = () => {
  const params = useParams()
  const history = useHistory()
  const [friend, setFriend] = useState({ name: '', age: 0, email: '' })
  const [editFriend, setEditFriend] = useState({ ...friend })
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    axiosWithAuth().get(`/friends/${params.id}`)
      .then(res => {
        console.log(res)
        setFriend(res.data)
        setEditFriend(res.data)
      })
  }, [])

  const handleChange = e => {
    debugger
    let temp = {
      ...editFriend,
      [e.target.name]: e.target.value
    }
    setEditFriend(temp)
  }

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth().put(`/friends/${params.id}`, editFriend)
      .then(res => {
        setFriend(editFriend)
        setEditing(false)
      })
      .catch(err => {

      })
  }

  const deleteFriend = e => {
    e.preventDefault()
    axiosWithAuth().delete(`/friends/${params.id}`)
      .then(res => {
        console.log(res)
        history.push('/userpage')
      })
  }

  return (
    <Grid container direction='column'>
      <Grid item>{!editing ? <Typography>{friend.name}</Typography> : <TextField name='name' label='name' value={editFriend.name} onChange={handleChange} />}</Grid>
      <Grid item>{!editing ? <Typography>{friend.age}</Typography> : <TextField name='age' label='age' value={editFriend.age} onChange={handleChange} />}</Grid>
      <Grid item>{!editing ? <Typography>{friend.email}</Typography> : <TextField name='email' label='email' value={editFriend.email} onChange={handleChange} />}</Grid>
      {!editing ? <Button onClick={() => setEditing(true)}>Edit</Button> : <Button onClick={handleSubmit}>Finish Editing</Button>}
      {!editing && <Button onClick={deleteFriend}>Delete this Friend</Button>}
    </Grid>
  )
}

export default FriendPage