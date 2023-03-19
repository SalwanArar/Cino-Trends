import './OurPortfolio.css';
import Latest from './tabs/Latest';
import MotionGraphic from './tabs/MotionGtaphic';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Tab, Tabs, Typography, Menu, MenuItem, useMediaQuery, useTheme, Button } from '@mui/material';

const options = [
    'Latest',
    'Motion Graphic',
    '2D Animation',
    'Digital Paining',
    'White Board',
    'Character Design',
    'Digital Marketing',
  ];

const optionsContent = [
    <Latest />,
    <MotionGraphic />,
    '2D Animation',
    'Digital Paining',
    'White Board',
    'Character Design',
    'Digital Marketing',
];

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ paddingTop: 1, maxWidth: '1200px', }}>
            {children}
            </Box>
        )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const flex = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
};

function OurPortfolio() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleTabChange = (event, newValue) => {
        setSelectedIndex(newValue);
    };

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <section className='m--portfolio'>
            <Typography
            variant='h2'
            component='h2'>
                Our Portfolio
            </Typography>
            <Typography
            variant='caption'
            component='caption'
            sx={{ fontSize: '2rem' }}>
                Create video that inspire your audience.
            </Typography>
            <Box
            sx={flex} 
            >
                { !isMobile ?
                    <Tabs
                    value={selectedIndex}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        marginTop: '48px',
                        '& .MuiTabs-indicator': {
                            display: 'none',
                        }
                    }}>
                        {options.map((option, index) =>
                            <Tab
                            label={option}
                            {...a11yProps(index)}
                            sx={{
                                background: selectedIndex === index ? '#090F24': 'transparent',
                                color: '#FFF',
                                borderRadius: '6px',
                                fontSize: '1.15rem',
                                fontWeight: 'bold',
                            }}
                            />
                        )}
                    </Tabs>
                    :
                    <>
                        <Button
                        variant="contained"
                        onClick={handleClickListItem}
                        sx={{
                            background: '#090F24',
                            color: '#6DC3BD',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}>
                            {options[selectedIndex]}
                        </Button>
                        <Menu  
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'lock-button',
                            role: 'listbox',
                        }}
                        sx={{
                            '& 	.MuiMenu-paper': {
                                background: '#6DC3BD'
                            },
                            '& .MuiMenu-list': {
                                color: '#090F24'
                            }
                        }}
                        >
                            {options.map((option, index) =>
                                <MenuItem
                                key={option}
                                selected={index === selectedIndex}
                                onClick={(event)=>{handleMenuItemClick(event, index)}}
                                sx={{ fontSize: '1.1rem' }}
                                >
                                    {option}
                                </MenuItem>
                            )}
                        </Menu>
                    </>
                }
                {optionsContent.map((option, index) =>
                    <TabPanel value={selectedIndex} index={index}>
                        {option}
                    </TabPanel>
                )}
            </Box>
        </section>
    );
}

export default OurPortfolio;
