import React from 'react';
import { makeStyles } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
// }));

function Footer () {
//   const classes = useStyles();

//   return (
    // <h1>
    //     Hello, World!
    //     This is a footer
    // </h1>);
  return (
    <footer style={{
        background: '#090F24',
        padding: '4rem'
    }}>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4} sx={{ color:'#FFF' }}>
                <Typography variant='h4'>CONTACT US</Typography>
                <Typography variant='h6' color='red'>cinotrends@gmail.com</Typography>
                <br/>
                <br/>
                <Typography variant='h4'>OFFICE</Typography>
                <Typography variant='h6'><a href='tel:00971507355523'>+971 50 735 5523</a></Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography variant='h6'>
                    FOLLOW US
                </Typography>
                <ul>
                    <li><a href='#'>Link 1</a></li>
                    <li><a href='#'>Link 2</a></li>
                    <li><a href='#'>Link 3</a></li>
                </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography variant='h6'>
                    LOCATION
                </Typography>
                <ul>
                    <li><a href='#'>Link 1</a></li>
                    <li><a href='#'>Link 2</a></li>
                    <li><a href='#'>Link 3</a></li>
                </ul>
            </Grid>
        </Grid>
      {/* <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Column 1
          </Typography>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Column 2
          </Typography>
          <ul>
            <li><a href="#">Link 4</a></li>
            <li><a href="#">Link 5</a></li>
            <li><a href="#">Link 6</a></li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Column 3
          </Typography>
          <ul>
            <li><a href="#">Link 7</a></li>
            <li><a href="#">Link 8</a></li>
            <li><a href="#">Link 9</a></li>
          </ul>
        </Grid>
      </Grid> */}
    </footer>
  );
};

export default Footer;
