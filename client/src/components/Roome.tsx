import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import { Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

export default function Roome({ room }) {
  const navigate = useNavigate();
  const { title, createdAt, location, region, id, image } = room;
  console.log(room);

  return (
    <>
      {room ? (
        <Card
          sx={{
            width: 345,
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            marginTop: '50px',
            padding: '10px',
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {/* {room.user.firstName[0].toUpperCase()} */}
              </Avatar>
            }
            title={title}
            subheader={createdAt.slice(0, 10)}
          />

          <CardMedia
            component="img"
            height="194"
            image={image}
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
          <Button
            variant="contained"
            onClick={() => navigate(`/room/details/${id}`)}
          >
            Read More
          </Button>
        </Card>
      ) : (
        <h1>loading...</h1>
      )}
    </>
  );
}
