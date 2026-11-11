import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./estilos/variables.css";
import "./estilos/base.css";
import "./estilos/componentes.css";
import "./estilos/inicio.css";
import "./estilos/proyectos.css";
import "./estilos/sobre-mi.css";
import "./estilos/contacto.css";

createRoot(document.getElementById("root")).render(
  <StrictMode><App /></StrictMode>,
);
