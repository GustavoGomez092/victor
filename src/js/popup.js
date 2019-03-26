import "../css/popup.css";
import Login from "./popup/Login_component.jsx";
import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <Login className='h-100 px-0'/>,
  window.document.getElementById("app-container")
);
