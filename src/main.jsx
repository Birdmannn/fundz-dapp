import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AppWrapper from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <AppWrapper />
  </React.StrictMode>
);
