import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#006b34', // verde oscuro
    },
    secondary: {
      main: '#1d834a', // verde
    },
    background: {
      main:'#e6edee',
      subheader: '#cddbde', // Blanco
    },
    text: {
      primary: '#000000', // Texto principal en negro
      secondary: '#bdbdbd', // Texto secundario en gris
    },
    button:{
      success:'#3a9c60  ',
      delete:'#b61203',
    }
  },
});

export default theme;
