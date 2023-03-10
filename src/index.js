//setup for React 18 
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App.js';

//create rootElement and get root
const rootElement = document.getElementById('root');

// create a root
const root = ReactDOM.createRoot(rootElement);

//render app to root
root.render(<App />);