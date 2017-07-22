import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
export default function initReactAPP(id, schema, schemaUrl) {
  ReactDOM.render(React.createElement(
    BrowserRouter,
    null,
    React.createElement(App, { Schema: schema, SchemaUrl: schemaUrl })
  ), document.getElementById(id));
}