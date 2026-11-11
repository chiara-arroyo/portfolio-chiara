import { perfil } from "../datos/perfil";

function Contacto() {
  const medios = [
    {
      nombre: "Email",
      detalle: perfil.email,
      enlace: `mailto:${perfil.email}`,
      simbolo: "✉",
    },
    {
      nombre: "Teléfono",
      detalle: perfil.telefono,
      enlace: `tel:${perfil.telefono}`,
      simbolo: "☎",
    },
    {
      nombre: "WhatsApp",
      detalle: "Enviar un mensaje",
      enlace: perfil.whatsapp ? `https://wa.me/${perfil.whatsapp}` : "",
      simbolo: "↗",
    },
    {
      nombre: "LinkedIn",
      detalle: "Perfil profesional",
      enlace: perfil.linkedin,
      simbolo: "in",
    },
    {
      nombre: "GitHub",
      detalle: "Repositorios y código",
      enlace: perfil.github,
      simbolo: "⌘",
    },
  ].filter((medio) => medio.enlace);

  return (
    <section className="contenedor seccion pagina-contacto">
      <div className="contacto-texto">
        <span className="sobrelinea">Contacto</span>
        <h1>
          Las buenas ideas empiezan con <em>una conversación</em>
        </h1>
        <p>
          Estoy abierta a nuevas oportunidades profesionales y a conversar sobre
          proyectos de desarrollo de software, soluciones digitales y marketing.
        </p>
        <a href={`mailto:${perfil.email}`} className="boton boton-principal">
          Escribirme por email ↗
        </a>
      </div>
      <div className="contacto-panel">
        <span className="sobrelinea">Canales de contacto</span>
        <div className="contacto-lista">
          {medios.map((medio) => (
            <a
              key={medio.nombre}
              href={medio.enlace}
              target={medio.nombre === "Email" ? undefined : "_blank"}
              rel="noreferrer"
              className="contacto-fila"
            >
              <span className="contacto-simbolo">{medio.simbolo}</span>
              <span className="contacto-datos">
                <strong>{medio.nombre}</strong>
                <small>{medio.detalle}</small>
              </span>
              <span className="contacto-flecha" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
        <p className="contacto-ubicacion">{perfil.ubicacion}</p>
      </div>
    </section>
  );
}

export default Contacto;
