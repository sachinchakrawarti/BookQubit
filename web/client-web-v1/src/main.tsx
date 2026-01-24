// Enables additional checks and warnings in development
import { StrictMode } from "react";

// React 18 root API
import { createRoot } from "react-dom/client";

// React Router for client-side routing
import { BrowserRouter } from "react-router-dom";

// Main App component (TypeScript automatically resolves .tsx)
import App from "./App";

// Global styles
import "./index.css";

// Get the root DOM element where React will mount
const rootElement = document.getElementById("root");

// TypeScript safety check:
// If the root element is missing, stop the app and throw an error
if (!rootElement) {
  throw new Error("Root element not found");
}

// Create a React root and render the application
createRoot(rootElement).render(
  <StrictMode>
    {/* Enables routing across the entire app */}
    <BrowserRouter>
      {/* Root application component */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
