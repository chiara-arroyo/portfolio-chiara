import { Link } from "react-router-dom";
import { perfil } from "../datos/perfil";
import { proyectos } from "../datos/proyectos";
import TarjetaProyecto from "../componentes/TarjetaProyecto";
import TituloSeccion from "../componentes/TituloSeccion";

function Inicio() {
  const destacados = proyectos.filter((proyecto) => proyecto.destacado);

  return (
    <>
      <section className="contenedor hero">
        <div className="hero-texto">
          <span className="sobrelinea"><span className="punto-estado" /> {perfil.titulo}</span>
          <h1>Desarrollo de software <em>y marketing digital</em></h1>
          <p className="hero-descripcion">
            Soy Chiara, Técnica Universitaria en Programación. Desarrollo aplicaciones web y sistemas de gestión, y también trabajo en estrategia de marca, comunicación y marketing digital.
          </p>
          <div className="botones hero-botones">
            <Link to="/proyectos" className="boton boton-principal">Explorar proyectos <span aria-hidden="true">↗</span></Link>
            <Link to="/contacto" className="boton boton-secundario">Hablemos</Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-marco" />
          <img className="hero-foto" src={perfil.foto} alt="Retrato profesional de Chiara Arroyo" fetchPriority="high" />
          <div className="hero-ficha">
            <span>Perfil profesional</span>
            <strong>Programación + marketing</strong>
          </div>
          <span className="hero-sello" aria-hidden="true">CA</span>
          <span className="hero-ubicacion">TUCUMÁN · ARGENTINA</span>
        </div>
      </section>

      <section className="franja-resultados" aria-label="Resultados destacados">
        <div className="contenedor resultados-grid">
          <div className="resultado-item">
            <strong>+1.000</strong>
            <span>socias en Club Crazy</span>
          </div>
          <div className="resultado-item">
            <strong>176.300</strong>
            <span>visualizaciones en Instagram*</span>
          </div>
          <div className="resultado-item">
            <strong>+299 %</strong>
            <span>interacciones en campaña*</span>
          </div>
          <p className="resultados-nota">*Resultados de la campaña del octavo aniversario de Crazy For You, agosto de 2026.</p>
        </div>
      </section>

      <section className="contenedor seccion proyectos-home">
        <TituloSeccion
          etiqueta="Selección de trabajos"
          titulo="Proyectos con objetivos reales"
          texto="Desarrollo de herramientas digitales y estrategias de comunicación para resolver necesidades concretas de negocios."
        />
        <div className="proyectos-grid">
          {destacados.map((proyecto, indice) => <TarjetaProyecto key={proyecto.id} proyecto={proyecto} numero={indice + 1} />)}
        </div>
        <div className="centrar"><Link to="/proyectos" className="enlace-flecha">Ver todos los proyectos <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="seccion enfoque-seccion">
        <div className="contenedor enfoque-grid">
          <div className="enfoque-intro">
            <span className="sobrelinea">Cómo trabajo</span>
            <h2>Primero entiendo el problema; después pienso cómo resolverlo</h2>
            <p>En mis proyectos me involucro tanto en la parte técnica como en el uso que las personas hacen de cada herramienta. Busco que el resultado sea práctico y se adapte al trabajo real.</p>
            <Link to="/sobre-mi" className="enlace-flecha">Conocé mi recorrido <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="enfoque-pasos">
            <article className="paso-enfoque"><span>01</span><div><h3>Comprender</h3><p>Escuchar necesidades, reconocer procesos y definir el problema que vale la pena resolver.</p></div></article>
            <article className="paso-enfoque"><span>02</span><div><h3>Diseñar</h3><p>Organizar funciones, contenidos y recorridos para que la solución sea clara y útil.</p></div></article>
            <article className="paso-enfoque"><span>03</span><div><h3>Desarrollar y mejorar</h3><p>Construir, probar y ajustar con foco en el uso cotidiano y los resultados.</p></div></article>
          </div>
        </div>
      </section>

      <section className="contenedor cierre seccion">
        <div className="cierre-tarjeta">
          <div>
            <span className="sobrelinea">Contacto</span>
            <h2>¿Hablamos?</h2>
            <p>Si tenés una propuesta, una idea o simplemente querés conocer mi trabajo, me gustaria que nos pongamos en contacto.</p>
          </div>
          <Link to="/contacto" className="boton boton-claro">Contactarme <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}

export default Inicio;
