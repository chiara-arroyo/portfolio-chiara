import { useEffect, useState } from "react";

function Galeria({ imagenes, nombre }) {
  const [seleccionada, setSeleccionada] = useState(null);

  useEffect(() => {
    if (seleccionada === null) return undefined;
    const cerrarConEscape = (evento) => {
      if (evento.key === "Escape") setSeleccionada(null);
    };
    window.addEventListener("keydown", cerrarConEscape);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", cerrarConEscape);
      document.body.style.overflow = "";
    };
  }, [seleccionada]);

  if (!imagenes?.length) return null;

  return (
    <>
      <div className="galeria">
        {imagenes.map((imagen, indice) => (
          <figure className="galeria-item" key={imagen.archivo}>
            <button type="button" onClick={() => setSeleccionada(imagen)} aria-label={`Ampliar imagen ${indice + 1} de ${nombre}`}>
              <img src={imagen.archivo} alt={imagen.descripcion || `Captura de ${nombre}`} loading="lazy" />
              <span className="galeria-ampliar" aria-hidden="true">↗</span>
            </button>
            {imagen.descripcion && <figcaption>{imagen.descripcion}</figcaption>}
          </figure>
        ))}
      </div>

      {seleccionada && (
        <div className="visor-imagen" role="dialog" aria-modal="true" aria-label="Vista ampliada de imagen" onClick={() => setSeleccionada(null)}>
          <button className="visor-cerrar" type="button" aria-label="Cerrar imagen" onClick={() => setSeleccionada(null)}>×</button>
          <figure onClick={(evento) => evento.stopPropagation()}>
            <img src={seleccionada.archivo} alt={seleccionada.descripcion || `Captura de ${nombre}`} />
            {seleccionada.descripcion && <figcaption>{seleccionada.descripcion}</figcaption>}
          </figure>
        </div>
      )}
    </>
  );
}

export default Galeria;
