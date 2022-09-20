import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from '@mui/material/Alert';

const theme = createTheme();

export default function LoginForm() {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });
  const [errMessage, setErrMessage] = React.useState();
  const handleLoginChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const registerHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', user, { withCredentials: true })
      .then((res) => {
        console.log(res.data.msg);
      })
      .catch((err) => {
        console.log(err.response.data);
        const errorResponse = err.response.data;
        console.log(errorResponse);

        setErrMessage(errorResponse.msg);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={registerHandler} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address*"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleLoginChange}
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password*"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleLoginChange}
              />
              <Alert severity="error">{errMessage}</Alert>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/register">Don't have an account? Sign Up</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
