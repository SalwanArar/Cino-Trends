import React from 'react';
import { Grid, Link, Typography } from '@mui/material';
import { FacebookRounded, LinkedIn, Phone, Smartphone, Twitter, YouTube } from '@mui/icons-material';
import { Box } from '@mui/system';


function Footer () {
  return (
    <footer style={{
        background: '#090F24',
        padding: '4rem'
    }}>
        <Grid container spacing={4} sx={{ color: '#FFF' , paddingTop: '3rem'}}>
            <Grid xs={12} sm={4}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Typography variant='h4'>
                        CONTACT US
                    </Typography>
                    <Link
                    href='mailto:info@cinotrends.com'
                    underline='hover'
                    sx={{ fontSize: '1.1rem', color: '#6DC3BD' }}>
                        {'info@cinotrends.ae'}
                    </Link>
                    <br />
                    <br />
                    <Typography variant='h4'>OFFICE</Typography>
                    <Box sx={{ marginTop: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems:'center' , marginBottom: '4px'}}>
                            <Smartphone sx={{ marginRight: '4px', color: '#6DC3BD' }}/>
                            <Link
                            href='tel:00971507790842'
                            underline='hover'
                            sx={{ fontSize: '1.1rem', color: '#6DC3BD' }}>
                                { '+971 50 779 0842' }
                            </Link>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems:'center' }}>
                            <Phone sx={{ marginRight: '4px', color: '#6DC3BD' }}/>
                            <Link
                            href='tel:0097126355911'
                            underline='hover'
                            sx={{ fontSize: '1.1rem', color: '#6DC3BD'  }}>
                                { '+971 02 635 5911' }
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={12} sm={4}>
                <Typography variant='h4' sx={{textAlign: 'center'}}>
                    FOLLOW US
                </Typography>
                <br/>
                <br/>
                <Grid
                sm={12}
                sx={{textAlign: 'center'}}>
                    <Link
                    href='#Facebook'>
                        <FacebookRounded sx={{ fontSize: '3rem', color: '#6DC3BD'  }}/>
                    </Link>
                    <Link
                    href='#Youtube'>
                        <YouTube sx={{ fontSize: '3rem', color: '#6DC3BD'  }}/>
                    </Link>
                    <Link
                    href='#Twitter'>
                        <Twitter sx={{ fontSize: '3rem', color: '#6DC3BD'  }}/>
                    </Link>
                    <Link
                    href='#LinkedIn'>
                        <LinkedIn sx={{ fontSize: '3rem', color: '#6DC3BD'  }}/>
                    </Link>
                </Grid>
            </Grid>
            <Grid  xs={12} sm={4} sx={{ alignItems: 'center' }}>
                <Typography variant='h4' sx={{textAlign: 'center'}}>
                    LOCATION
                </Typography>
                <br/>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link
                href='https://goo.gl/maps/CBdWs5ymjuT8X45F8'
                target="_blank"
                underline='hover'
                sx={{ fontSize: '1.1rem', color: '#6DC3BD' }}>
                    Cino Trends FZ LLC<br />
                    Cornich View Tower, Office 101,<br />
                    Al Markaziyah West, Abu Dhabi, UAE
                </Link>
                </Box>
            </Grid>
        </Grid>
    </footer>
  );
};

export default Footer;
