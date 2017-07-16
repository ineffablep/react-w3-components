import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
export default function initReactAPP(id, schema) {
  ReactDOM.render(
    <BrowserRouter>
      <App Schema={schema} />
    </BrowserRouter>,
    document.getElementById(id)
  );

  registerServiceWorker();
}
