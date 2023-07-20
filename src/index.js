import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import theme from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>    
            <CssBaseline/>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </ThemeProvider>
);

