import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Button } from '@mui/material';

import axios from 'axios';

export default function Post({
  title,
  location,
  region,
  createdAt,
  image,
  id,
  deleteFromDom,
}) {
  //   DELETE POST
  const deletehandler = (id) => {
    axios
      .delete(`http://localhost:5000/api/rooms/${id}`)
      .then(() => console.log('deleted'))
      .catch((err) => console.log(err));
  };

  return (
    <Card
      sx={{
        width: 280,
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        marginTop: '50px',
        padding: '10px',
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={title}
        subheader={createdAt.slice(0, 10)}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1663524789641-ac21f6ee2301?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {region}
        </Typography>
      </CardContent>
      <Button variant="contained" sx={{ maxWidth: '70px', marginRight: '4px' }}>
        Details
      </Button>
      <Button
        variant="contained"
        color="success"
        sx={{
          maxWidth: '70px',
          marginRight: '4px',
        }}
      >
        Accept
      </Button>
      <Button
        variant="outlined"
        color="error"
        sx={{ maxWidth: '70px' }}
        onClick={() => {
          deletehandler(id);
          deleteFromDom(id);
        }}
      >
        Delete
      </Button>
    </Card>
  );
}
