import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Schema from './schema.json'
export default function initReactAPP(id, schema) {
  ReactDOM.render(
    <BrowserRouter>
      <App Schema={schema} />
    </BrowserRouter>,
    document.getElementById(id)
  );
}

initReactAPP('root',Schema);
