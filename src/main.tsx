import React from "react";
import ReactDOM from "react-dom/client";
import StoreProvider from "components/StoreProvider.tsx";
import ThemeProvider from "components/ThemeProvider/ThemeProvider.tsx";
import App from "./App.tsx";
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
