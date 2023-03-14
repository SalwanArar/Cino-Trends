import { useTheme } from "@emotion/react";
import { Typography, Grid, Box, Card, useMediaQuery, CardContent, CardMedia } from '@mui/material';

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
                    // border: 'solid',
                    // height: '100p'
                    // aspectRatio: '1/1'
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
                    
                    <Grid container>
                        {gifs.map((gif, index) => (
                            <Grid xs={1 }sm={4}>
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