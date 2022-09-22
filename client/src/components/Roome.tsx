import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import { Button } from '@mui/material';





export default function Roome() {



    return (
        <Card sx={{
            width: 345, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginTop: "50px", padding: "10px"
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }

                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://images.unsplash.com/photo-1663524789641-ac21f6ee2301?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Tunis
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Tunis
                </Typography>
            </CardContent>
            <Button variant="contained">Read More</Button>
        </Card>
    );
}
