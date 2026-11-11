import { useMemo, useState } from "react";
import { proyectos } from "../datos/proyectos";
import TarjetaProyecto from "../componentes/TarjetaProyecto";

const filtros = [
  { id: "todos", texto: "Todos" },
  { id: "desarrollo", texto: "Desarrollo de software" },
  { id: "marketing", texto: "Marketing digital" },
];

function Proyectos() {
  const [filtro, setFiltro] = useState("todos");
  const visibles = useMemo(
    () => proyectos.filter((proyecto) => filtro === "todos" || proyecto.categoria === filtro),
    [filtro],
  );

  return (
    <section className="contenedor seccion pagina-proyectos">
      <header className="pagina-intro">
        <span className="sobrelinea">Trabajos y proyectos</span>
        <h1>Proyectos en los que <em>trabajé</em></h1>
        <p>Sistemas que desarrollé, proyectos que están en marcha y trabajos de comunicación digital.</p>
      </header>

      <div className="filtros" role="group" aria-label="Filtrar proyectos">
        {filtros.map((opcion) => (
          <button key={opcion.id} type="button" className={filtro === opcion.id ? "activo" : ""} aria-pressed={filtro === opcion.id} onClick={() => setFiltro(opcion.id)}>
            {opcion.texto}
          </button>
        ))}
      </div>

      <div className="proyectos-grid proyectos-listado">
        {visibles.map((proyecto, indice) => <TarjetaProyecto key={proyecto.id} proyecto={proyecto} numero={indice + 1} />)}
      </div>
    </section>
  );
}

export default Proyectos;
