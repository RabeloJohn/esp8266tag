import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ItmCxtProvider } from './store/itemsContext';

ReactDOM.render(<BrowserRouter> <ItmCxtProvider> <App /> </ItmCxtProvider> </BrowserRouter>,document.getElementById('root'));



