import { useTheme } from "@emotion/react";
import { Typography, Grid, Box, Card, useMediaQuery, CardContent, CardMedia, IconButton } from '@mui/material';
// import Carousel from "react-multi-carousel";


import gif1 from './assets/datacollection.gif';
import gif2 from './assets/scriptwriting.gif';
import gif3 from './assets/storyboard.gif';
import gif4 from './assets/voiceover.gif';
import gif5 from './assets/animation.gif';
import gif6 from './assets/delivery.gif';
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useEffect, useState } from "react";
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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Card sx={{
            key: index,
            // flexGrow:1,
            // p:3,
            m:`${isMobile? 0: 2}`,
            backgroundColor: isOdd(index)? '#26558B' : '#FFF',
            minWidth: `${isMobile? '100%': 'auto'}`,
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
                    sx={{ aspectRatio: '1/1' }}
                    />
                </Box>
            </CardContent>
        </Card>
    );
}


function BackButton({children: slides, onClick}) {
    return (
      <Box
        sx={{
          bgcolor: '#090F2488',
          borderRadius: '50%',
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in',
          m: 1,
          p: 1,
          '&:hover': {
            bgcolor: '#090F24',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          },
        }}
        >
        <IconButton
        onClick={ onClick }
        sx={{
            p: 0,
            color: '#64C3BD',
        }}>
            { slides }
          
        </IconButton>
      </Box>
    );
}

function Carousel({
    children: slides,
    autoSlideInterval = 5000,
}) {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => curr === 0 ? slides.length - 1: curr - 1);
    const next = () => setCurr((curr) => curr === slides.length - 1 ? 0: curr + 1);

    useEffect(() => {
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, []);
    return (
        <div
        style={{
            width: '30rem',
            overflow: 'hidden',
            position: 'relative',
            // border: 'solid black',
            // paddingInline: '2rem'
        }}
        >
            <div
            style={{
                display: 'flex',
                // gap: '4rem',
                // marginInline: '1rem',
                // flexWrap: 'nowrap',
                // flexGrow: '1',
                transition: 'ease-out',
                transitionDuration: '500ms',
                transform: `translateX(-${curr * 100}%)`,
                // border: 'solid blue'
            }}>
                {slides}
            </div>
            <div
            style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 4,
            }}>
            <BackButton onClick={prev}>
                <ChevronLeft sx={{  fontSize: '32px' }} />
            </BackButton>
            <BackButton onClick={next}>
                <ChevronRight sx={{  fontSize: '32px' }} />
            </BackButton>
            </div>
        </div>
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
        <Box className="m--portfolio" component={'div'}>
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
            {
                isMobile ?
                    <Carousel>
                        {
                            gifs.map((gif, index) => (
                                <CustomCardAnimate src={gif} index={index} caption={captions[index]}/>
                                // <img src={gif} width="100%" style={{border:'solid red'}}/>
                            ))
                        }
                    </Carousel>
                    :
                            <Box
                            sx={{
                                maxWidth: '1000px',
                                marginTop: '48px' ,
                                overflow: 'hidden',
                                // position: 'relative',
                            }}>
                    <Grid container >
                        {gifs.map((gif, index) => (
                             <Grid xs={6} sm={4}>
                                 <CustomCardAnimate src={gif} index={index} caption={captions[index]}/>
                             </Grid>
                         ))}
                     </Grid> 
            </Box>
            }
        </Box>
    );
    // return (
    //     <Box
    //     sx={{
    //         overflow: 'hidden',
    //         // position: 'relative'
    //     }}
    //     className="m--portfolio">
    //         <Typography variant="h2" component='h2'>
    //             How We Animate
    //         </Typography>
    //         <Typography
    //         variant='caption'
    //         component='caption'
    //         sx={{ fontSize: '2rem' }}
    //         >
    //             Create video that inspire your audience.
    //         </Typography>
    //         <Box
    //         sx={{
    //             maxWidth: '1000px',
    //             marginTop: '48px' ,
    //             overflow: 'hidden',
    //             // position: 'relative',
    //         }}>
    //             {
    //                 isMobile ?
    //                 <Carousel>
    //                      {gifs.map((gif, index) => (
    //                         // <img src={ gif }/>
    //                          <CustomCardAnimate src={gif} index={index} caption={captions[index]}/>
    //                      ))}
    //                  </Carousel>
    //                 :
    //                 <Grid container >
    //                     {gifs.map((gif, index) => (
    //                         <Grid xs={6} sm={4}>
    //                             <CustomCardAnimate src={gif} index={index} caption={captions[index]}/>
    //                         </Grid>
    //                     ))}
    //                 </Grid> 
    //             }
    //         </Box>
    //     </Box>
    // );
}

export default HowWeAnimate;