function TituloSeccion({ etiqueta, titulo, texto, alineado = "izquierda" }) {
  return (
    <div className={`titulo-seccion titulo-${alineado}`}>
      {etiqueta && <span className="sobrelinea">{etiqueta}</span>}
      <h2>{titulo}</h2>
      {texto && <p>{texto}</p>}
    </div>
  );
}

export default TituloSeccion;
