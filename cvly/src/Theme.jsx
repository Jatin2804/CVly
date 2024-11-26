// src/theme.js
import { createTheme } from '@mui/material/styles';

export const Theme = (darkMode) => createTheme({
  palette: {
    mode: darkMode ? 'dark' : 'light',
    primary: {
      main: darkMode ?  '#242222' : '#EB5777',
      dark: darkMode ?  '#070707' : '#B6425C',
      light: darkMode ?  '#474747' : '#F48A9A ',
    },
    secondary: {
      main: darkMode ?  '#353434fc' : '#1B9BB1:',
      dark: darkMode ?  '#2a2a2a' : '#157885',
      light: darkMode ?  '#242222' : '#1B9BB1',
    },
    third: {
    
      light: darkMode ? '#242222' : '#8DBE7A',
    },
    forth: {
    
      light: darkMode ?  '#242222' : '#FFE143',
    },
    fifth: {
    
      light: darkMode ?  '#242222' : '#F59C5D',
    },
    background: {
      default: darkMode ? '#121212' : '#F9FAFA',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    
    h1: {
        fontSize: '2rem',
        color: darkMode ? '#FFFFFF' : '#121212', // Set custom color here
        '@media (min-width:600px)': {
          fontSize: '3rem',
        },
      },
      h2: {
        fontSize: '1.75rem',
        color: darkMode ? '#F5F5F5' : '#121212', // Set custom color here
        '@media (min-width:600px)': {
          fontSize: '2.5rem',
        },
      },
      body1: {
        color: darkMode ? '#E0E0E0' : '#121212', // Set body text color here
      },
  },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: '8px',
//           textTransform: 'none',
//         },
//       },
//     },
//   },
});
