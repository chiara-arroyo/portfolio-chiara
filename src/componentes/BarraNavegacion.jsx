import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { perfil } from "../datos/perfil";

function BarraNavegacion() {
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);

  return (
    <header className="barra">
      <div className="contenedor barra-contenido">
        <Link to="/" className="barra-marca" onClick={cerrar} aria-label="Ir al inicio">
          <span className="marca-monograma">CA</span>
          <span>{perfil.nombreCorto}<small>PORTFOLIO</small></span>
        </Link>

        <button
          className={`menu-toggle ${abierto ? "abierto" : ""}`}
          type="button"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          aria-controls="navegacion-principal"
          onClick={() => setAbierto((valor) => !valor)}
        >
          <span /><span /><span />
        </button>

        <nav id="navegacion-principal" className={`barra-enlaces ${abierto ? "visible" : ""}`}>
          <NavLink to="/" end onClick={cerrar}>Inicio</NavLink>
          <NavLink to="/proyectos" onClick={cerrar}>Proyectos</NavLink>
          <NavLink to="/sobre-mi" onClick={cerrar}>Sobre mí</NavLink>
          <NavLink to="/contacto" onClick={cerrar}>Contacto</NavLink>
          {perfil.cv && <a href={perfil.cv} download className="barra-cv" onClick={cerrar}>Descargar CV ↗</a>}
        </nav>
      </div>
    </header>
  );
}

export default BarraNavegacion;
