import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App";
import Navi from "./Navi";
import 'alertifyjs/build/css/alertify.min.css';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
