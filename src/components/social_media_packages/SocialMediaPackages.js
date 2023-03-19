import { Box, Typography, Button, useTheme, useMediaQuery, Divider } from "@mui/material";



function CustomCard({ title, items, buttonBgColor, index }) {
    const indexEven = index % 2 === 0;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box sx={{
            backgroundColor: indexEven ? 'rgba(44, 64, 143, 1)' : '#FFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.6rem',
            borderRadius: '8px',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
            width: '25rem',
            minWidth: isMobile ? '40rem':'0',
            margin: '0 auto',
            marginTop: '4rem',
            }}>
            <Typography
            variant='h5'
            component={'h5'}
            sx={{
                color: indexEven ? 'white' : 'rgba(9, 28, 97, 1)',
                fontSize: '2.2rem',
                textAlign: 'center',
                fontWeight: 'bold',
            }}>
                {title}
            </Typography>
            <Box
            className= 'custom-scroller'
            sx={{
                maxHeight: '20rem',
                overflowY: 'scroll',
                paddingRight: '1rem',
                margin: '2rem 0'
            }}>
                {items.map((item) => (
                    <>
                    <Typography
                    variant='caption'
                    component='p'
                    sx={{
                        // backgroundColor: index % 2 === 0 ? "#f0f0f0" : "transparent",
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        // p: '1rem',
                        color: 'rgba(109, 195, 189, 1)'
                    }}
                    >
                        {item}
                    </Typography>
                    <Divider />
                    </>
                ))}
            </Box>
            <Button
            variant="contained"
            fullWidth
            sx={{
                background: `linear-gradient(180deg, ${buttonBgColor} 33.91%, rgba(210, 210, 210, 0.99) 51.04%, ${buttonBgColor} 71.87%)`,
                color: "#fff",
                marginTop: '1rem',
                fontSize: '1.5rem',
            }}>
                Order Now
            </Button>
        </Box>
    );
}

function SocialMediaPackages () {
    const packagesDetails = [
        {
            title: 'CINO START',
            items: [
                'Create Cover & Social page.',
                'Content Creation.',
                '05 Social Posts Per Month.',
                '1 Animated Social Posts.',
                '30 Seconds Animation Video Duration.',
                'Instgram account managment.',
            ],
            buttonColor: '#6DC3BD',
        },
        {
            title: 'PACK BRONZE',
            items: [
                'Create Cover & Social page.',
                'Content Creation.',
                '10 Social Posts Per Month.',
                '3 Animated Social Posts.',
                '45 Seconds Animation Video Duration.',
                'Twitter & Instgram account managment.',
            ],
            buttonColor: 'rgba(195, 114, 109, 1)',
        },
        {
            title: 'CINO SILVER',
            items: [
                'Create Cover & Social page.',
                'Content Creation.',
                '15 Social Posts Per Month.',
                '3 Animated Social Posts.',
                '60 Seconds Animation Video Duration.',
                'All Social account managment.',
            ],
            buttonColor: 'rgba(171, 171, 204, 1)',
        },
        {
            title: 'CINO GOLD',
            items: [
                'Create Cover & Social page.',
                'Content Creation.',
                '20 Social Posts Per Month.',
                '5 Animated Social Posts.',
                '120 Seconds Animation Video Duration.',
                'All Social account managment.',
            ],
            buttonColor: 'rgba(195, 186, 109, 1)',
        },
    ];
    return (
        <Box component={ 'section' } className={ 'm--portfolio' }>
            <Typography variant={ 'h2' } component={ 'h2' }>
                Social Media Packages
            </Typography>
            <Typography 
            variant='caption'
            component='caption'
            sx={{ fontSize: '2rem' }}>
                We like to serve the industry with persuasive and conceptual design that rock the market. Creating an impacts is what we do best and what we ike to provide to every client with our pocket-friendly design pancakes.
            </Typography>
            <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2rem',
            }}>
                {
                    packagesDetails.map((item, index)=>(
                        <CustomCard 
                        title={item.title}
                        items={item.items}
                        buttonBgColor={item.buttonColor}
                        index={index}/>
                    ))
                }
            </Box>
        </Box>
    )
}

export default SocialMediaPackages;