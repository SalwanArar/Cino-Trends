import * as React from 'react';
import img1 from './assets/latest/1.jpg';
import {Card, CardActionArea, CardMedia, Grid, Paper} from '@mui/material';

function CustomCardMedia (img) {
    return (
        <Card sx={{margin: '1rem'}}>
            <CardActionArea>
                <CardMedia
                component='img'
                width='90%'
                src= {img}
                alt='image'
                sx={{ aspectRatio: '1 / 1' }}
                />
            </CardActionArea>
        </Card>
    );
}

function Latest() {
    return (
        <Grid
        container
        >
            <Grid xs={3}><CustomCardMedia img={img1}/></Grid>
            <Grid xs={3}><CustomCardMedia /></Grid>
            <Grid xs={3}><CustomCardMedia /></Grid>
            <Grid xs={3}><CustomCardMedia /></Grid>
            <Grid xs={3}><CustomCardMedia /></Grid>
            <Grid xs={3}><CustomCardMedia /></Grid>
            <Grid xs={3}><CustomCardMedia /></Grid>
            <Grid xs={3}><CustomCardMedia /></Grid>
        </Grid>
    );
}

export default Latest;