import React from 'react'
import { CardContent, Typography, Card, CardActionArea } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const FriendCard = ({ data }) => {
  const history = useHistory()
  return (
    <Card>
      <CardContent>
        <CardActionArea onClick={() => history.push(`/friends/${data.id}`)}>
          <Typography>
            {data.name}
          </Typography>
        </CardActionArea>
      </CardContent>
    </Card>
  )
}

export default FriendCard