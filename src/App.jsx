import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BarraNavegacion from "./componentes/BarraNavegacion";
import PieDePagina from "./componentes/PieDePagina";
import VolverArriba from "./componentes/VolverArriba";
import Inicio from "./paginas/Inicio";
import Proyectos from "./paginas/Proyectos";
import DetalleProyecto from "./paginas/DetalleProyecto";
import SobreMi from "./paginas/SobreMi";
import Contacto from "./paginas/Contacto";

function NoEncontrado() {
  return (
    <section className="contenedor seccion pagina-no-encontrada">
      <span className="sobrelinea">Error 404</span>
      <h1>No encontramos esa página.</h1>
      <Link className="enlace-flecha" to="/">Volver al inicio ↗</Link>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <VolverArriba />
      <BarraNavegacion />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/:id" element={<DetalleProyecto />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>
      <PieDePagina />
    </BrowserRouter>
  );
}

export default App;
