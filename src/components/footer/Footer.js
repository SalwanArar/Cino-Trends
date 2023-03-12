import React from 'react';
import { Grid, Link, Typography } from '@mui/material';
import { FacebookRounded, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
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
                href='mailto:cinotrends@gmail.com'
                underline='hover'
                sx={{ fontSize: '1.1rem'}}>
                    cinotrends@gmail.com
                </Link>
                <br />
                <br />
                <Typography variant='h4'>OFFICE</Typography>
                <Link
                href='tel:00971507355523'
                underline='hover'
                sx={{ fontSize: '1.1rem' }}>
                    +971 50 735 5523
                </Link>
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
                        <FacebookRounded sx={{ fontSize: '3rem' }}/>
                    </Link>
                    <Link
                    href='#Youtube'>
                        <YouTube sx={{ fontSize: '3rem' }}/>
                    </Link>
                    <Link
                    href='#Twitter'>
                        <Twitter sx={{ fontSize: '3rem' }}/>
                    </Link>
                    <Link
                    href='#LinkedIn'>
                        <LinkedIn sx={{ fontSize: '3rem' }}/>
                    </Link>
                </Grid>
            </Grid>
            <Grid  xs={12} sm={4}>
                <Typography variant='h4' sx={{textAlign: 'center'}}>
                    LOCATION
                </Typography>
                <br/>
                <Link
                href='https://goo.gl/maps/CBdWs5ymjuT8X45F8'
                target="_blank"
                underline='hover'
                sx={{ fontSize: '1.1rem' }}>
                    Cino Trends FZ LLC<br />
                    Cornich View Tower, Office 101,<br />
                    Al Markaziyah West, Abu Dhabi, UAE
                </Link>
            </Grid>
        </Grid>
    </footer>
  );
};

export default Footer;
