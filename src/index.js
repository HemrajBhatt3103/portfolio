import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './index.css';

// Dark theme configuration
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d4ff', // Cyan accent
      light: '#4de6ff',
      dark: '#0099cc',
    },
    secondary: {
      main: '#00ff88', // Green accent
      light: '#4dffaa',
      dark: '#00cc6a',
    },
    background: {
      default: '#0a0a0a', // Deep black
      paper: '#1a1a1a', // Dark gray for cards
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
    divider: '#333333',
  },
  typography: {
    fontFamily: '"Inter", "Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      '@media (max-width:768px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '1.8rem',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.4rem',
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(0, 212, 255, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: 'linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)',
          border: '1px solid #333333',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 20px 40px rgba(0, 212, 255, 0.1)',
            border: '1px solid #00d4ff',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#00d4ff',
            },
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);