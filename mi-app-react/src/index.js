import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Tema súper claro y minimalista
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E8D0F0',        // Púrpura muy muy suave
      light: '#F0E8F8',       // Lavanda súper claro
      dark: '#D0B8E0',        // Un poco más oscuro pero suave
      contrastText: '#6B7280',
    },
    secondary: {
      main: '#F8E8F0',        // Rosa súper suave
      light: '#FCF0F8',       // Rosa casi blanco
      dark: '#F0D8E8',        // Rosa muy claro
      contrastText: '#6B7280',
    },
    background: {
      default: '#FDFDFD',     // Casi blanco
      paper: '#FFFFFF',       // Blanco puro
    },
    text: {
      primary: '#6B7280',     // Gris súper suave
      secondary: '#9CA3AF',   // Gris muy claro
    },
    divider: '#F0F0F0',       // Divisor súper claro
    error: {
      main: '#FCA5A5',        // Rojo muy suave
    },
    warning: {
      main: '#FCD34D',        // Amarillo muy suave
    },
    info: {
      main: '#93C5FD',        // Azul muy suave
    },
    success: {
      main: '#86EFAC',        // Verde muy suave
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontWeight: 300,
      letterSpacing: '-0.01em',
      color: '#6B7280',
    },
    h2: {
      fontWeight: 300,
      letterSpacing: '-0.01em',
      color: '#6B7280',
    },
    h3: {
      fontWeight: 300,
      letterSpacing: '-0.01em',
      color: '#6B7280',
    },
    h4: {
      fontWeight: 400,
      color: '#6B7280',
    },
    h5: {
      fontWeight: 400,
      color: '#6B7280',
    },
    h6: {
      fontWeight: 400,
      color: '#6B7280',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#9CA3AF',
      fontWeight: 300,
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.6,
      color: '#9CA3AF',
      fontWeight: 300,
    },
    button: {
      fontWeight: 400,
      textTransform: 'none',
      borderRadius: 16,
    },
  },
  shape: {
    borderRadius: 16,
  },
  spacing: 8,
  components: {
    // Slider súper limpio
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#E8D0F0',
          height: 6,
          '& .MuiSlider-track': {
            border: 'none',
            height: 6,
            borderRadius: 3,
            backgroundColor: '#E8D0F0',
          },
          '& .MuiSlider-thumb': {
            height: 20,
            width: 20,
            backgroundColor: '#E8D0F0',
            border: 'none',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
              boxShadow: '0 4px 15px rgba(232, 208, 240, 0.3)',
              transform: 'scale(1.1)',
              backgroundColor: '#F0E8F8',
            },
            '&:before': {
              display: 'none',
            },
          },
          '& .MuiSlider-rail': {
            height: 6,
            borderRadius: 3,
            backgroundColor: '#F8E8F0',
          },
          '& .MuiSlider-mark': {
            backgroundColor: '#FFFFFF',
            height: 10,
            width: 10,
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            '&.MuiSlider-markActive': {
              backgroundColor: '#E8D0F0',
            },
          },
          '& .MuiSlider-markLabel': {
            color: '#9CA3AF',
            fontWeight: 300,
            fontSize: '0.85rem',
            '@media (max-width: 480px)': {
              fontSize: '0.7rem',
            },
          },
          '& .MuiSlider-valueLabel': {
            lineHeight: 1.2,
            fontSize: 12,
            backgroundColor: '#E8D0F0',
            color: '#6B7280',
            padding: 0,
            width: 28,
            height: 28,
            borderRadius: '50% 50% 50% 0',
            transformOrigin: 'bottom left',
            transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
            '&:before': { display: 'none' },
            '&.MuiSlider-valueLabelOpen': {
              transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
            },
            '& > *': {
              transform: 'rotate(45deg)',
            },
          },
        },
      },
    },
    // Paper súper limpio
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: 'none',
          '&.MuiPaper-elevation1': {
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
          },
          '&.MuiPaper-elevation6': {
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
          },
        },
      },
    },
    // Container limpio
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 20,
          paddingRight: 20,
          '@media (min-width: 600px)': {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
    },
    // Card súper limpio
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
          transition: 'all 0.3s ease',
          border: 'none',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
          },
        },
      },
    },
    // Typography limpia
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-h1, &.MuiTypography-h2, &.MuiTypography-h3': {
            color: '#6B7280',
            fontWeight: 300,
          },
          '&.MuiTypography-h4, &.MuiTypography-h5, &.MuiTypography-h6': {
            color: '#6B7280',
            fontWeight: 400,
          },
          '&.MuiTypography-body1, &.MuiTypography-body2': {
            color: '#9CA3AF',
            fontWeight: 300,
          },
        },
      },
    },
    // Eliminar todos los bordes por defecto
    MuiBox: {
      styleOverrides: {
        root: {
          border: 'none',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);