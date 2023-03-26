import { Box } from "@mui/material";

function OurPortfolio () {
    return (
        <Box 
        component={ 'div' }
        sx={{ 
            background: 'linear-gradient(180deg, #6DC3BD 11.44%, #26558B 50.64%, #6DC3BD 93.37%)',
            color: 'white',
            height: '200rem'
        }}>
            <h1>Our Portfolio</h1>
        </Box>
    )
}

export default OurPortfolio;