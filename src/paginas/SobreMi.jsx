import { Link } from "react-router-dom";
import { perfil, experiencia, formacion, formacionComplementaria, habilidades, idiomas } from "../datos/perfil";

function SobreMi() {
  return (
    <section className="contenedor seccion sobre-mi">
      <header className="pagina-intro sobre-pagina-intro">
        <span className="sobrelinea">Conocé mi recorrido</span>
        <h1>Programación, marketing y <em>docencia</em></h1>
        <p>{perfil.resumen}</p>
      </header>

      <div className="sobre-perfil">
        <div className="sobre-foto-marco"><img src={perfil.fotoAlternativa || perfil.foto} alt="Retrato de Chiara Arroyo" loading="lazy" /></div>
        <div className="sobre-perfil-texto">
          <span className="sobrelinea">Sobre mi trabajo</span>
          <h2>Me gusta entender qué necesita cada proyecto</h2>
          <p>Mi recorrido combina desarrollo de software, marketing digital y docencia. En programación trabajo principalmente con aplicaciones web y sistemas de gestión; en marketing, con contenidos, campañas y comunicación de marca.</p>
          <p>También preparo y dicto clases de Bioinformática Rehabilitadora para estudiantes de Fonoaudiología. Esa experiencia me permite trabajar con herramientas digitales desde una perspectiva educativa.</p>
          <Link to="/proyectos" className="enlace-flecha">Ver proyectos ↗</Link>
        </div>
      </div>

      <section className="sobre-bloque">
        <div className="bloque-cabecera"><span className="sobrelinea">Experiencia profesional</span><h2>Experiencia</h2></div>
        <div className="sobre-lista">
          {experiencia.map((item) => (
            <article key={item.puesto} className="sobre-item">
              <span className="sobre-periodo">{item.periodo}</span>
              <div className="sobre-item-contenido">
                <h3>{item.puesto}</h3>
                <p className="sobre-lugar">{item.lugar}</p>
                <p>{item.texto}</p>
                <ul>{item.tareas.map((tarea) => <li key={tarea}>{tarea}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sobre-bloque">
        <div className="bloque-cabecera"><span className="sobrelinea">Formación</span><h2>Estudios y aprendizaje</h2></div>
        <div className="sobre-lista">
          {formacion.map((item) => (
            <article key={item.titulo} className="sobre-item">
              <span className="sobre-periodo">{item.periodo}</span>
              <div className="sobre-item-contenido"><h3>{item.titulo}</h3><p className="sobre-lugar">{item.lugar}</p></div>
            </article>
          ))}
        </div>
        <div className="formacion-complementaria">
          <h3>Formación complementaria</h3>
          <div className="formacion-grid">
            {formacionComplementaria.map((item) => (
              <article key={item.titulo} className="formacion-card">
                <span>{item.estado}</span><h4>{item.titulo}</h4><p>{item.institucion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sobre-bloque habilidades-bloque">
        <div className="bloque-cabecera"><span className="sobrelinea">Caja de herramientas</span><h2>Habilidades</h2></div>
        <div className="habilidades-grid">
          {habilidades.map((grupo) => (
            <article className="habilidad-card" key={grupo.grupo}>
              <h3>{grupo.grupo}</h3><p>{grupo.descripcion}</p>
              <div className="habilidad-lista">{grupo.lista.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="sobre-bloque idiomas-bloque">
        <div className="bloque-cabecera"><span className="sobrelinea">Idiomas</span><h2>Comunicación</h2></div>
        <div className="idiomas-lista">{idiomas.map((idioma) => <span key={idioma}>{idioma}</span>)}</div>
      </section>

      <div className="sobre-cta"><div><span className="sobrelinea">Sigamos en contacto</span><h2>¿Querés conocer un poco más sobre lo que hago?</h2></div><Link to="/contacto" className="boton boton-principal">Contactarme ↗</Link></div>
    </section>
  );
}

export default SobreMi;
