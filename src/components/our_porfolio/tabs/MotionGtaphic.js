import { Card, CardActionArea, CardMedia, Dialog, Grid } from '@mui/material';
import { useState } from 'react';
import AlFathea from './assets/motion_graphic/AL FATEHA APP.mp4';
import AlRawda3 from './assets/motion_graphic/AL RAWDA FACTORY...mp4';
import AlRawda2 from './assets/motion_graphic/AL RAWDA FACTORY..mp4';
import AlRawda1 from './assets/motion_graphic/AL RAWDA FACTORY.mp4';
import Esdco from './assets/motion_graphic/ESDCO.mp4';
import HajjOmra from './assets/motion_graphic/HAJJ & OMRA.mp4';
import Nory from './assets/motion_graphic/NORY .mp4';
import Rabeh from './assets/motion_graphic/RABEH .mp4';

import thumbnail1 from './assets/motion_graphic/AL FATEHA APP.png';
import thumbnail2 from './assets/motion_graphic/AL RAWDA FACTORY...png';
import thumbnail3 from './assets/motion_graphic/AL RAWDA FACTORY..png';
import thumbnail4 from './assets/motion_graphic/AL RAWDA FACTORY.png';
import thumbnail5 from './assets/motion_graphic/ESDCO.png';
import thumbnail6 from './assets/motion_graphic/HAJJ & OMRA.png';
import thumbnail7 from './assets/motion_graphic/NORY .png';
import thumbnail8 from './assets/motion_graphic/RABEH .png';


const videos = [
    AlFathea,
    AlRawda3,
    AlRawda2,
    AlRawda1,
    Esdco,
    HajjOmra,
    Nory,
    Rabeh,
];


const thumbnails = [
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
    thumbnail5,
    thumbnail6,
    thumbnail7,
    thumbnail8,
];

function CustomCardMedia ({video, thumbnail}) {
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
                    width='auto'
                    src= {thumbnail}
                    alt='img'
                    // autoPlay
                    // controls
                    sx={{
                        aspectRatio: '1 / 1',
                        objectFit: 'cover'
                    }}
                        />
                </CardActionArea>
            </Card>
            <Dialog open={open} onClose={handleClose}>
                <Card>
                    <CardMedia
                    component='video'
                    src={video}
                    alt="Sorry this video doesn't work on your browser"
                    autoPlay
                    loop
                    />
                </Card>
            </Dialog>
        </>
    );
}

function MotionGraphic () {
    return (
        <Grid
        container
        >
            {videos.map((video, index)=>
                <Grid xs={3}>
                    <CustomCardMedia video= { video } thumbnail={thumbnails[index]}/>
                    {/* {thumbnails[index]} */}
                </Grid>
            )}
        </Grid>
    );
}

export default MotionGraphic;