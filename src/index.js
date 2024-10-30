import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './app';

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);