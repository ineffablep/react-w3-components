import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
export default function initReactAPP(id, schema) {
  ReactDOM.render(React.createElement(
    BrowserRouter,
    null,
    React.createElement(App, { Schema: schema })
  ), document.getElementById(id));
}
