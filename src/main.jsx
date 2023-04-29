import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import axios from "axios"

import { BrowserRouter as Router } from 'react-router-dom';

axios.defaults.baseURL = "https://azizjon003.jprq.live/api/v1";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
