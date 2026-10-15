import { hydrateRoot } from "react-dom/client";
import App from "./App.jsx";

// index.html ships prerendered markup (scripts/prerender.js); hydrate it instead of re-rendering.
hydrateRoot(document.getElementById("root"), <App />);
