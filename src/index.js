import React from "react";
import ReactDOM from "react-dom";
import JavascriptTimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import App from "./App";

JavascriptTimeAgo.addLocale(en);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
