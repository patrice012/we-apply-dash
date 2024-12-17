import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { SessionProvider } from "./context/SessionContext.tsx";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <SessionProvider>
        <App />
      </SessionProvider>
    </StrictMode>
  </BrowserRouter>
);
