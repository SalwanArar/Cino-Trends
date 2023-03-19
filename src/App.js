import './App.css';
import { ThemeProvider } from '@mui/material';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';
import OurPortfolio from './components/our_porfolio/OurPortfolio.js';
import Footer from './components/footer/Footer.js';
import {createTheme} from '@mui/material/styles';
import HowWeAnimate from './components/how_we_animate/HowWeAnimate.js';
import Bannar from './assets/images/mwc.png';
import PackagesSection from './components/packages_for_you/PackagesSection.js';
import SocialMediaPackages from './components/social_media_packages/SocialMediaPackages.js';

const theme = createTheme({
  palette: {
    primary: { main: '#6DC3BD' },
    secondary: { main: '#090F24' },
    testColor: { main: '#FF0000' },
    white: { main: '#FFF' },
    bg: { main: '#090F24' },
    local: { main: '#64C3BD' },
    basic: { main: '#26348B' },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='app-background'>
        <Header />
        <Main />
        <OurPortfolio />
        <HowWeAnimate />
        <img src={Bannar} alt={'Kamel Background'} style={{width:"100%"}}/>
        <PackagesSection />
        <SocialMediaPackages />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
