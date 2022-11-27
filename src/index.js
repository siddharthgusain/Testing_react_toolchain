import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(<App />);
root.render(
  <App />
);

/*
NOTE:-We Can't see webpack in this project package.json as it is dependency of "react-script package" and is present 
in its package.json , while npm resolves the package.json recursively , it creates this dependency graph
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
