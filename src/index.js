// Import necessary React libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import CSS styles
import './index.css';
// Import the main App component
import App from './App';
// Import performance measurement utility
import reportWebVitals from './reportWebVitals';

// Create a root React DOM node at the 'root' element in the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the App component inside React's StrictMode (helps with development warnings)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
