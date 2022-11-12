import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
import './App.css';
import { ExcerSizeContextProvider } from './context/ExcersizeContext';

ReactDom.render(
    <ExcerSizeContextProvider>
        <App />
    </ExcerSizeContextProvider>
    ,
    document.getElementById('root')
);