import { Link } from "react-router-dom";

function TarjetaProyecto({ proyecto, numero }) {
  return (
    <Link to={`/proyectos/${proyecto.id}`} className="tarjeta-proyecto">
      <div className="tarjeta-imagen">
        <img src={proyecto.portada} alt={proyecto.portadaAlt || `Vista de ${proyecto.nombre}`} loading="lazy" />
        <span className="tarjeta-numero">{String(numero).padStart(2, "0")}</span>
        <span className="tarjeta-estado">{proyecto.estado}</span>
      </div>
      <div className="tarjeta-contenido">
        <span className="sobrelinea">{proyecto.etiqueta}</span>
        <h3>{proyecto.nombre}</h3>
        <p>{proyecto.resumen}</p>
        <span className="tarjeta-ver">Explorar proyecto <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}

export default TarjetaProyecto;
