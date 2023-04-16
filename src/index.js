import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Search />
    <footer>
    <small><a href="https://github.com/Fabygranados/react-app" target="_blank">Open-source code</a>, by <a href="">Faby Granados </a>👾</small>
    </footer>
  </StrictMode>
);
