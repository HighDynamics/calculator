import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

window.addEventListener("resize", () => {
  document
    .querySelector(":root")
    .style.setProperty("--vh", window.innerHeight / 100 + "px");
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
