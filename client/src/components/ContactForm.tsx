import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import contact from '../contact.png'



const theme = createTheme();

const ContactForm = () => {


    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "50px" }}>
            <ThemeProvider theme={theme}>
                <div style={{ maxWidth: "400px" }}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Typography component="h1" variant="h5">
                            Interact with us
                        </Typography>

                        <Box
                            component="form"
                            noValidate
                            sx={{ mt: 3 }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="phome"
                                        label="Subject"
                                        name="phone"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        multiline
                                        name="Description"
                                        label="Description"
                                        type="text"
                                        id="Description"
                                        rows={4}
                                        fullWidth

                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Send
                            </Button>

                        </Box>
                    </Box>
                </div>
            </ThemeProvider>
            <img src={contact} alt=""
                width="400" height="400" />
        </div>
    );
};

export default ContactForm;
