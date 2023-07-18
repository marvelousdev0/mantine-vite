import React from "react";
import ReactDOM from "react-dom/client";
import StoreProvider from "components/StoreProvider";
import ThemeProvider from "components/ThemeProvider/ThemeProvider";
import App from "./app";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
);
