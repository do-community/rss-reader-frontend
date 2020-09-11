import React from "react";
import ReactDOM from "react-dom";
import JavascriptTimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { AuthProvider } from "./contexts/AuthContext";
import { FeedProvider } from "./contexts/FeedContext";
import App from "./App";

JavascriptTimeAgo.addLocale(en);

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <FeedProvider>
        <App />
      </FeedProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
