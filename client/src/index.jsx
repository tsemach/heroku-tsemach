import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'

// const ROOT = document.querySelector(".root");
const ROOT = document.getElementById("root");

// ReactDOM.render(<h1>hello</h1>, ROOT); 
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  , ROOT);