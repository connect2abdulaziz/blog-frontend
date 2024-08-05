import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 'bold',
      fontSize: '48px',
      lineHeight: '48px',
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '36px',
      lineHeight: 'auto',
    },
    h3: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: 'auto',
    },
    h4: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: 'auto',
    },
    h5: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      fontSize: '21px',
      lineHeight: 'auto',
    },
    h6: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: 'auto',
    },
    body1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 'normal',
      fontSize: '15px',
      lineHeight: '150%',
    },
    body2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      fontSize: '15px',
      lineHeight: '150%',
    },
    caption: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      fontSize: '15px',
      lineHeight: '150%',
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#ffffff', 
    },
  },
});

export default theme;
