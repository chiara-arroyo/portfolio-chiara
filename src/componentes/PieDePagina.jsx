import { Link } from "react-router-dom";
import { perfil } from "../datos/perfil";

function PieDePagina() {
  const enlaces = [
    { nombre: "Email", url: `mailto:${perfil.email}` },
    { nombre: "LinkedIn", url: perfil.linkedin },
    { nombre: "GitHub", url: perfil.github },
  ].filter((enlace) => enlace.url);

  return (
    <footer className="pie">
      <div className="contenedor pie-contenido">
        <div>
          <Link to="/" className="pie-marca">Chiara Arroyo<span>Desarrollo de software · Marketing digital</span></Link>
        </div>
        <div className="pie-derecha">
          <nav className="pie-enlaces" aria-label="Enlaces externos">
            {enlaces.map((enlace) => <a key={enlace.nombre} href={enlace.url} target={enlace.nombre === "Email" ? undefined : "_blank"} rel="noreferrer">{enlace.nombre} ↗</a>)}
          </nav>
          <small>© {new Date().getFullYear()} Chiara Arroyo</small>
        </div>
      </div>
    </footer>
  );
}

export default PieDePagina;
