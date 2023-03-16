import { useTheme } from "@emotion/react";
import { Typography, Grid, Box, Card, useMediaQuery, CardContent, CardMedia, IconButton, Button } from '@mui/material';
// import Carousel from "react-multi-carousel";


import gif1 from './assets/datacollection.gif';
import gif2 from './assets/scriptwriting.gif';
import gif3 from './assets/storyboard.gif';
import gif4 from './assets/voiceover.gif';
import gif5 from './assets/animation.gif';
import gif6 from './assets/delivery.gif';
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
// import Carousel from "react-multi-carousel";

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


function BackButton() {
    return (
      <Box
        sx={{
          bgcolor: '#FFFFFF',
          borderRadius: '50%',
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
          width: '56px',
          height: '56px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            bgcolor: '#E0E0E0',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          },
        }}
        >
        <IconButton sx={{ p: 0 }}>
          <ChevronLeft sx={{ color: '#757575', fontSize: '32px' }} />
        </IconButton>
      </Box>
    );
}

function Carousel({children: slides}) {
    return (
        <Box
        component={'div'}
        sx={{
            overflow: 'hidden',
            position: 'relative',
        }}>
            <Box component={ 'div' } sx={{ display: 'flex' }} >
                { slides }
            </Box>
            <Box
            component={ 'div' }
            sx={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 4,
            }}>
                <Box
                sx={{
                    backgroundColor: '#090F24',
                    boxShadow: '10px 1px 50px rgba(0, 0, 0, 0.1)',
                    borderRadius: '50%',
                }}>
                    <IconButton size='large' aria-label="upload picture" component="label">
                        <ChevronLeft color="local"/>
                    </IconButton>
                </Box>
                <BackButton />
                <Box component={'button'}>
                    <ChevronRight size={40}/>
                </Box>
            </Box>
        </Box>
    );
}

function HowWeAnimate() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
                    <Carousel>
                         {gifs.map((gif, index) => (
                             <CustomCardAnimate src={gif} index={index} caption={captions[index]}/>
                         ))}
                     </Carousel>
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