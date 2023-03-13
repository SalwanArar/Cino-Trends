import * as React from 'react';
import img1 from './assets/latest/1.jpg';
import img2 from './assets/latest/2.jpg';
import img3 from './assets/latest/3.jpg';
import img4 from './assets/latest/4.jpg';
import img5 from './assets/latest/5.jpg';
import img6 from './assets/latest/6.jpg';
import img7 from './assets/latest/7.jpg';
import img8 from './assets/latest/8.jpg';
import {Card, CardActionArea, CardHeader, CardMedia, Dialog, Grid, Typography} from '@mui/material';
import { useState } from 'react';

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
];

function CustomCardMedia ({src}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Card sx={{margin: '1rem'}}>
                <CardActionArea onClick={handleOpen}>
                    <CardMedia
                    component='img'
                    src= {src}
                    alt='image'
                    sx={{ aspectRatio: '1 / 1' }}
                    />
                </CardActionArea>
            </Card>
            
            <Dialog open={open} onClose={handleClose}>
                <Card>
                    <CardHeader>
                        <Typography  sx={{color: 'red'}} >Hello, World!</Typography>
                    </CardHeader>
                    <CardMedia component='img' src={src} alt='img'/>
                </Card>
            </Dialog>
    </>
    );
}

function Latest() {
    return (
        <Grid
        container
        >
            {images.map((img, index)=>
                <Grid xs={6} sm={3}>
                    <CustomCardMedia src= {img} />
                </Grid>
            )}
        </Grid>
    );
}

export default Latest;