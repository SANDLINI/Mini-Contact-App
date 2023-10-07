import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AddContactProvider } from "./context/AddContact/AddContact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AddContactProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AddContactProvider>
  </React.StrictMode>
);
