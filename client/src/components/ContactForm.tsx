import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';




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
            <img src="data:image/jpeg;base64,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31m1FEURlpS9+DN7HEE4fiFgMxw/4z4TErSGdkzc5hVVPZ3wuzXq7dLq3iXS6P1LqpoxIMMeLY1xcHW42DTbxWUkrIxV5osYonyGjBVc/de3XQyak1g91ju5w/UBYr9VK4f0L9zoz+5YC1QHB45hbHWScYsdyJWouqrrNfoKrbtppPBt/orL9Hzt2wyjvY4fotgkYcHDmFrMUgxaeRWM5UOVb7jIgt7xb6q2Ss6Faqhdz0VMvLO7g1g8y4/opOUd9FMfZndxc0fK0n9ykRc1lA1tLuHYLqMnilmZxPUoiIoamoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiKlzbqLde9U3Rv8A4imYXMkd242i5a5xyLQPdJOzcTzylRUubdb7PaHQPzm8Rr+dFotFnbOzNdwOpR/qfqXgwz1IBftbHtDOBPF3oO/Z3zIgFU1tlUsZpnyuznlZQwsibmsCpLBwVJhbwVxFqW1WDTN4Kk0jeCyURFiOomlY0mhoXe1Gx3e1p+oW0RBdghvxWDQ6OihuI2MjBNyGtDbnibLORExxSlERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERF//9k=" alt=""
                width="400" height="400" />
        </div>
    );
};

export default ContactForm;
