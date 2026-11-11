import { Link, useParams } from "react-router-dom";
import { proyectos } from "../datos/proyectos";
import Galeria from "../componentes/Galeria";

function DetalleProyecto() {
  const { id } = useParams();
  const proyecto = proyectos.find((item) => item.id === id);

  if (!proyecto) {
    return (
      <section className="contenedor seccion pagina-no-encontrada">
        <span className="sobrelinea">Error 404</span>
        <h1>Este proyecto no está disponible.</h1>
        <Link to="/proyectos" className="enlace-flecha">Volver a proyectos ↗</Link>
      </section>
    );
  }

  const otrasTecnologias = proyecto.tecnologias || [];

  return (
    <article className="detalle-proyecto">
      <header className="detalle-cabecera">
        <div className="contenedor">
          <Link to="/proyectos" className="detalle-volver">← Todos los proyectos</Link>
          <div className="detalle-etiquetas"><span>{proyecto.etiqueta}</span><span className="detalle-estado">{proyecto.estado}</span></div>
          <h1>{proyecto.nombre}</h1>
          <p className="detalle-cliente">{proyecto.cliente}</p>
          <p className="detalle-resumen">{proyecto.resumen}</p>
          <p className="detalle-rol"><strong>Mi participación:</strong> {proyecto.rol}</p>
        </div>
      </header>

      <div className="contenedor detalle-cuerpo">
        {proyecto.imagenes?.length > 0 && (
          <section className="detalle-seccion detalle-galeria-seccion">
            <div className="detalle-seccion-titulo"><span className="sobrelinea">Vistas del proyecto</span><p>Pantallas y recursos del proyecto.</p></div>
            <Galeria imagenes={proyecto.imagenes} nombre={proyecto.nombre} />
          </section>
        )}

        <div className="detalle-columnas">
          <section className="detalle-seccion">
            <span className="sobrelinea">01 · Contexto</span>
            <h2>Contexto</h2>
            <p>{proyecto.contexto}</p>
          </section>
          <section className="detalle-seccion">
            <span className="sobrelinea">02 · Desafío</span>
            <h2>El desafío</h2>
            <p>{proyecto.desafio}</p>
          </section>
        </div>

        <section className="detalle-seccion detalle-solucion">
          <span className="sobrelinea">03 · Solución</span>
          <h2>Mi aporte</h2>
          <p>{proyecto.solucion}</p>
        </section>

        <section className="detalle-seccion detalle-funciones">
          <div>
            <span className="sobrelinea">04 · Alcance</span>
            <h2>Funcionalidades y tareas</h2>
          </div>
          <ul className="lista-funciones">
            {proyecto.funcionalidades.map((funcion, indice) => <li key={funcion}><span>{String(indice + 1).padStart(2, "0")}</span>{funcion}</li>)}
          </ul>
        </section>

        {proyecto.resultados?.length > 0 && (
          <section className="detalle-seccion detalle-resultados">
            <span className="sobrelinea">05 · Impacto</span>
            <h2>Resultados</h2>
            <ul>{proyecto.resultados.map((resultado) => <li key={resultado}>{resultado}</li>)}</ul>
            {proyecto.periodoMetricas && <p className="nota-metricas">{proyecto.periodoMetricas}</p>}
          </section>
        )}

        <section className="detalle-seccion detalle-tecnologias">
          <div><span className="sobrelinea">Herramientas</span><h2>Tecnologías y recursos</h2></div>
          <div className="habilidad-lista">{otrasTecnologias.map((tecnologia) => <span key={tecnologia}>{tecnologia}</span>)}</div>
        </section>

        <div className="detalle-cierre">
          <p>¿Querés conversar sobre un proyecto similar?</p>
          <Link to="/contacto" className="boton boton-principal">Contactarme ↗</Link>
        </div>
      </div>
    </article>
  );
}

export default DetalleProyecto;
