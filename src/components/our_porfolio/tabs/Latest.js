import * as React from 'react';
import img1 from './assets/latest/1.jpg';
import { styled } from '@mui/material/styles';
import {Card, CardActionArea, CardMedia, Grid, Paper} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: '20px',
    height: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    color: theme.palette.text.secondary,
}));

const flex = {
    border: 'solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
};

function Latest() {
    return (
        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm:2, md: 3}} sx={flex}>
            <Grid item xs={3} sx={flex}>
                <Item>1</Item>
            </Grid>
            <Grid item xs={3} sx={flex}>
                <Item>2</Item>
            </Grid>
            <Grid item xs={3} sx={flex}>
                <Item>3</Item>
            </Grid>
            <Grid item xs={3} sx={flex}>
                <Card >
                    <CardActionArea>
                        <CardMedia
                        component='img'
                        height='180px'
                        width='180px'
                        src= {img1}
                        alt='image'
                        sx={{
                            width: '100%',
                            height: 'auto',
                            aspectRatio: '1 / 1',
                        }}
                        />
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={3} sx={flex}>
                <Item>5</Item>
            </Grid>
            <Grid item xs={3} sx={flex}>
                <Item>6</Item>
            </Grid>
            <Grid item xs={3} sx={flex}>
                <Item>7</Item>
            </Grid>
            <Grid item xs={3} sx={flex}>
                <Item>8</Item>
            </Grid>
        </Grid>
    );
}

export default Latest;