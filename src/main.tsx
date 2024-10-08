import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import HexaUI from "./UI/Providers/HexaUI.provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HexaUI>
      <App />
    </HexaUI>
  </StrictMode>
);
