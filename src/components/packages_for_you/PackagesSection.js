import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Typography, Box, Button, useTheme, useMediaQuery, IconButton } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import Wave from './wave.png';

function ResponsiveBox({title, price, children}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0',
            backgroundColor: 'linear-gradient(0deg, white 90%, rgba(44, 64, 143, 1) 90%)',
            borderRadius: '12px',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
            maxWidth: '40rem',
            minWidth: isMobile ? '40rem':'0',
            margin: '0 auto',
            marginTop: '4rem',
        }}
        >
            <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(44, 64, 143, 1)',
                padding: '1.6rem',
                width: '100%',
                borderRadius: '12px 12px 0 0',
            }}>
                <Typography
                variant="h5"
                sx={{
                    color: '#FFFFFF',
                    textAlign: 'center',
                    fontSize: '2rem',
                    m: '1rem',
                }}>
                    {title}
                </Typography>
                <Typography
                variant='h6'
                sx={{
                    color: '#6DC3BD',
                    fontSize: '3rem',
                    textAlign: 'center',
                    position: 'absolute',
                    top: '-2.5rem',
                    fontWeight: '900',
                    WebkitTextStroke: '.2rem #090F24BB',
                }}>
                    {price + ' AED'}
                </Typography>
            </Box>
            <img src={Wave} alt='wave' width={'100%'}/>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                padding: '1rem',
                width: '100%',
                borderRadius: '0 0 12px 12px',
            }}
            >
                <Typography variant="subtitle1" sx={{ color: '#6DC3BD', fontSize: '2rem' }}>
                    <Typography variant="span" sx={{color: 'red', fontSize: '2rem' }}>
                        60 
                    </Typography> Seconds Duration
                </Typography>
                <Box sx={{ width: '100%', m: '2rem 0' }}>
                {
                    children.map((item, index)=> (
                        <Typography
                        variant='body'
                        component={'body'}
                        sx={{
                            color: '#2C408F',
                            textAlign: 'center',
                            margin: '0',
                            p: '1rem 0rem',
                            fontSize: '1.5rem',
                            fontWeight: '500',
                            background: index % 2 === 1 ? 'none' : 'rgba(0, 0, 0, 0.05)'
                        }}>
                            { item }
                        </Typography>
                    ))
                }
                </Box>
                <Button
      variant="contained"
      style={{
        backgroundColor: "#6DC3BD",
        color: "rgba(9, 28, 97, 1)",
        width: "100%",
        fontWeight: 'bold',
        fontSize: '1.3rem',
      }}
    >
      ORDER NOW
    </Button>
            </Box>
        </Box>
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
    const next = useCallback(() => {
        setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1));
      }, [slides.length]);
      
    useEffect(() => {
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [next, autoSlideInterval]);
    return (
        <div
        style={{
            width: '40rem',
            overflow: 'hidden',
            position: 'relative',
        }}
        >
            <div
            style={{
                display: 'flex',
                transition: 'ease-out',
                transitionDuration: '500ms',
                transform: `translateX(-${curr * 100}%)`,
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


function PackagesSection () {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const packagesDetails = [
        {
            price: 2999,
            title: 'Motion Graphic Videos',
            children: [
                'Script Writing',
                'Voice Over',
                'Background Music',
                'Sound Effects',
                'Original Clip Art',
            ],
        },
        {
            price: 3499,
            title: 'Text & Image Videos',
            children: [
                'Script Writing',
                'Voice Over',
                'Background Music',
                'Sound Effects',
                'Images',
            ],
        },
        {
            price: 3999,
            title: '2D Frames Animation',
            children: [
                'Script Writing',
                'Voice Over',
                'Background Music',
                'Sound Effects',
                'Character Design',
            ],
        },
    ];
    return (
        <Box component={ 'section' } className={ 'm--portfolio' }>
            <Typography variant={ 'h2' } component={ 'h2' }>
                Packages Selected By Budget
            </Typography>
            <Typography 
            variant={ 'caption' }
            component={ 'p' }
            maxWidth={ '1600px' }
            align={ 'center' }
            sx={{ fontSize: '2rem' }}>
                We love contributing to the industry with compelling conceptual designs that rock up the market. Influencing is what we do best and we are happy to provide our pocket-friendly design packages to every customer
            </Typography>
            {
                isMobile ?
                <Carousel>
                    {
                    packagesDetails.map((item) =>
                        <ResponsiveBox
                        title={item.title}
                        price={item.price}
                        children={item.children}
                        />
                    )
                }
                </Carousel>
                :
                <Box
                sx={{
                    display: 'flex',
                    gap: '2rem',
                }}>
                {
                    packagesDetails.map((item) =>
                        <ResponsiveBox
                        title={item.title}
                        price={item.price}
                        children={item.children}
                        />
                    )
                }
                </Box>
            }
        </Box>
    );
}

export default PackagesSection;