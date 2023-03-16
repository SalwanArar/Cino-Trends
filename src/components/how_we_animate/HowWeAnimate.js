import { useTheme } from "@emotion/react";
import { Typography, Grid, Box, Card, useMediaQuery, CardContent, CardMedia } from '@mui/material';
// import Carousel from "react-multi-carousel";


import gif1 from './assets/datacollection.gif';
import gif2 from './assets/scriptwriting.gif';
import gif3 from './assets/storyboard.gif';
import gif4 from './assets/voiceover.gif';
import gif5 from './assets/animation.gif';
import gif6 from './assets/delivery.gif';

const gifs = [
    gif1,
    gif2,
    gif3,
    gif4,
    gif5,
    gif6,
];

const captions = [
    'Data Collection',
    'Script Writing',
    'Story Board',
    'Voice Over',
    'Animation',
    'Delivery',
];

function isOdd(num) { return num % 2;}

function CustomCardAnimate ({src, index, caption}) {
    return (
        <Card sx={{
            key: index,
            p:3,
            m:2,
            backgroundColor: isOdd(index)? '#26558B' : '#FFF',
            borderRadius: '8px',
            aspectRatio: '1/1'
            }}>
            <CardContent>
                <Typography
                variant='h4'
                component='h4'
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: isOdd(index)? '#FFF' : '#26558B',
                }}>
                    {caption}
                </Typography>
                <Box
                sx={{
                    display: 'flex',
                    alignItems:'center',
                    justifyContent: 'center',
                }}>
                    <Typography
                    sx={{
                        fontSize: '4rem',
                        marginLeft: '15px',
                        color: '#6DC3BDAA',
                        fontWeight: '600',
                    }}>
                            {index + 1}
                    </Typography>
                    <CardMedia
                    component='img'
                    alt={'gif' + (index + 1)}
                    src={src}
                    style={{

                    }}
                    sx={{
                        aspectRatio: '1/1',
                    //     border: 'solid',
                    //     // flex: 'wrap'
                    }}
                    />
                </Box>
            </CardContent>
        </Card>
    );
}

function HowWeAnimate() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slideToShow: 1,
    //     sliderToScroll: 1,
    // }

    // const items = [
    //     { id: 1, title: 'Item 1' },
    //     { id: 2, title: 'Item 2' },
    //     { id: 3, title: 'Item 3' },
    //     { id: 4, title: 'Item 4' },
    //     { id: 5, title: 'Item 5' },
    //     { id: 6, title: 'Item 6' },
    //   ];

    return (
        <section className="m--portfolio">
            <Typography variant="h2" component='h2'>
                How We Animate
            </Typography>
            <Typography
            variant='caption'
            component='caption'
            sx={{ fontSize: '2rem' }}
            >
                Create video that inspire your audience.
            </Typography>
            <Box sx={{ maxWidth: '1200px', marginTop: '48px' }}>
                {
                    !isMobile ?
                    <div>
                        Hello, World!
                    </div>
                    :
                    <Grid container >
                        {gifs.map((gif, index) => (
                            <Grid xs={6} sm={4}>
                                <CustomCardAnimate src={gif} index={index} caption={captions[index]}/>
                            </Grid>
                        ))}
                    </Grid> 
                }
            </Box>
        </section>
    );
}

export default HowWeAnimate;