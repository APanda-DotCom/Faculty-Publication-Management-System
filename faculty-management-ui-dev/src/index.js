<<<<<<< HEAD
import express from "express"
import dotenv from "dotenv"
import Bootstrap from "./bootstrap";

const app=express();
 
dotenv.config();

app.set('port', process.env.PORT || 7000);
const bootstrap = new Bootstrap(app);
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> 5e1ae31 (front-end)
