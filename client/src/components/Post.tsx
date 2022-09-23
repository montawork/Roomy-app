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
import { useNavigate } from 'react-router-dom';

export default function Post({
  title,
  location,
  region,
  createdAt,
  image,
  id,
  deleteFromDom,
  isAccepted,
  setRefrech,
  refresh,
}) {
  const navigate = useNavigate();
  //   DELETE POST
  const deletehandler = (id) => {
    axios
      .delete(`http://localhost:5000/api/rooms/${id}`)
      .then(() => console.log('deleted'))
      .catch((err) => console.log(err));
  };

  //   ACCEPT POST BY THE ADMIN
  const acceptPost = (id) => {
    axios
      .put(`http://localhost:5000/api/rooms/accept/${id}`, {})
      .then(() => {
        setRefrech(!refresh);
      })
      .catch((err) => {
        console.log(err);
      });
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
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {region}
        </Typography>
      </CardContent>
      <Button
        onClick={() => {
          navigate(`/room/details/${id}`);
        }}
        variant="contained"
        sx={{ maxWidth: '70px', marginRight: '4px' }}
      >
        Details
      </Button>
      {isAccepted ? (
        <span
          style={{ fontSize: '1.1rem', marginRight: '4px', color: '#2e7d32' }}
        >
          Accepted ✔
        </span>
      ) : (
        <Button
          onClick={() => {
            acceptPost(id);
          }}
          variant="contained"
          color="success"
          sx={{
            maxWidth: '70px',
            marginRight: '4px',
          }}
        >
          Accept
        </Button>
      )}
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
