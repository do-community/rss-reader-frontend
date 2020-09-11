import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { FeedProvider } from "./contexts/FeedContext";
import App from "./App";

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
