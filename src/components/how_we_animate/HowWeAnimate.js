const { Typography, Grid, Box, CardHeader, Card, useMediaQuery } = require("@mui/material");


function CustomCardAnimate ({src}) {
    return (
        <Card>
            <CardHeader>Hello, World!</CardHeader>
        </Card>
    );
}

function HowWeAnimate() {
    // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobile = false;
    return (
        <section className="m--portfolio">
            <Typography variant="h2" component='h2'>isMobile={isMobile}
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
                    isMobile ?
                    'h1'
                    :
                    <Grid container>
                        <Grid sm={4}><CustomCardAnimate /></Grid>
                        <Grid sm={4}><CustomCardAnimate /></Grid>
                        <Grid sm={4}><CustomCardAnimate /></Grid>
                        <Grid sm={4}><CustomCardAnimate /></Grid>
                        <Grid sm={4}><CustomCardAnimate /></Grid>
                        <Grid sm={4}><CustomCardAnimate /></Grid>
                    </Grid> 
                }
            </Box>
        </section>
    );
}

export default HowWeAnimate;