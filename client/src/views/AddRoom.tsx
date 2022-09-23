import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      Roomy {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const AddRoom = ({ userID }) => {
  //   console.log(userID);

  const [roomData, setRoomData] = useState({
    title: '',
    location: '',
    surface: '',
    region: '',
    nbrBeds: '',
    nbrRoommates: '',
    image: '',
    description: '',
    user_id: userID,
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setRoomData({
      ...roomData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const config = {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    };
    axios
      .post(
        'http://localhost:5000/api/create/rooms',
        roomData,
        {
          withCredentials: true,
        },
        config
      )
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('*********************', err.response.data.errors);
        // const errorResponse = err.response.data.errors;
        // const errs = [];
        // for (const err of errorResponse) {
        //   errs.push(err.message);
        // }
        // setErrors(errs);
      });
  };

  //
  const {
    title,
    location,
    surface,
    region,
    nbrBeds,
    nbrRoommates,
    image,
    description,
    user_id,
  } = roomData;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add Room
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  autoFocus
                  onChange={handleChange}
                  value={title}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="location"
                  label="Location"
                  name="location"
                  autoComplete="family-name"
                  onChange={handleChange}
                  value={location}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="surface"
                  label="Surface"
                  name="surface"
                  autoComplete="surface"
                  onChange={handleChange}
                  value={surface}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="region"
                  label="Region"
                  name="region"
                  onChange={handleChange}
                  value={region}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="nbrBeds"
                  label="numbre of Beds"
                  id="nbrBeds"
                  autoComplete="new-nbrBeds"
                  onChange={handleChange}
                  value={nbrBeds}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="nbrRoommates"
                  label="numbre of Roommates"
                  id="nbrRoommates"
                  autoComplete="new-nbrRoommates"
                  onChange={handleChange}
                  value={nbrRoommates}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="image"
                  label="Image"
                  id="image"
                  autoComplete="new-image"
                  onChange={handleChange}
                  value={image}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="description"
                  id="description"
                  autoComplete="new-description"
                  onChange={handleChange}
                  value={description}
                />
                <input
                  type="hidden"
                  name="user_id"
                  //   value={userID}
                  //   onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Room
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default AddRoom;
