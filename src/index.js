import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import Schema from "./resources/json/schema.json";
import "./index.css";
function init(id,schema) {
  ReactDOM.render(
    <BrowserRouter>
      <App Schema={schema}/>
    </BrowserRouter>,
    document.getElementById(id)
  );
  
  registerServiceWorker();
}

init("root",Schema);
