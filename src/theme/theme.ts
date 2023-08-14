import { ThemeOptions, createTheme } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#ffb24c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2ebfb4',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    error: {
      main: '#e83030',
    },
    text: {
      secondary: '#bebebe',
    },
  },
  typography: {
    h1: {
      fontSize: '4rem',
      fontWeight: 400,
    },
    fontFamily: 'Noto Sans Vithkuqi',
  },
};

export const theme = createTheme(themeOptions)