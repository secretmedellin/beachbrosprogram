import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./services/serviceHelper";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "toastr/build/toastr.min.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import debug from "sabio-debug";
const _logger = debug.extend("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(_logger);
