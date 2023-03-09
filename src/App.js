import { ThemeProvider } from '@mui/material';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';
import OurPortfolio from './components/our_porfolio/OurPortfolio.js';
import Footer from './components/footer/Footer.js';
import {createTheme} from '@mui/material/styles';
import './App.css';

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
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
