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
                    component='video'
                    width='auto'
                    src= {src}
                    alt='video'
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
                    src={src}
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
                    <CustomCardMedia src= {video} />
                </Grid>
            )}
        </Grid>
    );
}

export default MotionGraphic;