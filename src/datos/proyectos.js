export const proyectos = [
  {
    id: "club-crazy",
    nombre: "Club Crazy",
    categoria: "desarrollo",
    etiqueta: "Plataforma de fidelización",
    cliente: "Crazy For You",
    estado: "En uso",
    destacado: true,
    portada: "/img/club-crazy/panel-administracion.webp",
    portadaAlt: "Panel administrativo de Club Crazy con accesos a las herramientas de gestión",
    resumen:
      "Una aplicación web para que las clientas acumulen puntos, avancen por niveles y consulten premios y beneficios de la tienda.",
    rol: "Análisis funcional, desarrollo full stack y diseño de la experiencia digital.",
    contexto:
      "Crazy For You buscaba reconocer la frecuencia de compra y fortalecer el vínculo con sus clientas, más allá de cada visita al local.",
    desafio:
      "Diseñar una experiencia sencilla para las socias y, al mismo tiempo, ofrecer al equipo de la tienda herramientas para administrar altas, puntos, canjes, niveles y acciones especiales.",
    solucion:
      "Desarrollé Club Crazy como una plataforma web con un espacio para las socias y un panel administrativo. El sistema organiza la fidelización mediante puntos y seis niveles de compra, incluida la categoría VIP, con beneficios exclusivos.",
    funcionalidades: [
      "Registro y consulta de la cuenta de cada socia.",
      "Acumulación de puntos vinculada a las compras.",
      "Seis niveles de compra, incluida la categoría VIP.",
      "Misiones y actividades para sumar puntos extra.",
      "Consulta de premios, beneficios e historial de movimientos.",
      "Panel administrativo para gestionar socias, puntos, canjes y acciones especiales.",
    ],
    resultados: [
      "Más de 1.000 socias registradas en la plataforma.",
      "Un programa estructurado en seis niveles de compras y una categoría VIP.",
      "Una herramienta digital incorporada a la experiencia cotidiana de la tienda.",
    ],
    tecnologias: ["React", "Node.js", "Express", "MySQL"],
    imagenes: [
      { archivo: "/img/club-crazy/panel-administracion.webp", descripcion: "Panel administrativo y accesos a las principales herramientas de gestión" },
      { archivo: "/img/club-crazy/registro-socia.webp", descripcion: "Formulario de registro de nuevas socias" },
      { archivo: "/img/club-crazy/app-inicio-sesion.webp", descripcion: "Acceso móvil al espacio de socias" },
      { archivo: "/img/club-crazy/app-premios.webp", descripcion: "Sección de premios disponibles para canjear" },
      { archivo: "/img/club-crazy/app-beneficios.webp", descripcion: "Beneficios asociados a los niveles del programa" },
    ],
    enlaces: { demo: "", repositorio: "" },
  },
  {
    id: "solymar-pos",
    nombre: "Sistema de gestión Sol&Mar",
    categoria: "desarrollo",
    etiqueta: "Punto de venta · Inventario · Producción",
    cliente: "Sol&Mar · Tienda de productos de limpieza y hogar",
    estado: "Desarrollado a medida",
    destacado: true,
    portada: "/img/solymar/punto-de-venta.webp",
    portadaAlt: "Interfaz del punto de venta Sol&Mar con búsqueda de productos y gestión de tickets",
    resumen:
      "Un sistema de gestión pensado para un comercio que vende productos de limpieza y también fabrica y fracciona parte de lo que comercializa.",
    rol: "Relevamiento de necesidades, diseño funcional y desarrollo full stack.",
    contexto:
      "El negocio necesitaba organizar en una misma herramienta las operaciones de venta y el seguimiento de productos e insumos utilizados en su producción.",
    desafio:
      "Adaptar el sistema a una operatoria que combina ventas minoristas y mayoristas, inventario y elaboración interna, sin sumar complejidad al trabajo del mostrador.",
    solucion:
      "Diseñé y programé un sistema POS a medida con módulos para ventas, productos, clientes, reportes, ganancias, producción e insumos. La interfaz organiza las tareas habituales del comercio y centraliza información que antes podía quedar distribuida en distintos registros.",
    funcionalidades: [
      "Punto de venta con búsqueda de productos y gestión de tickets.",
      "Búsqueda de productos por nombre o código de barras.",
      "Gestión de múltiples tickets, descuentos y medios de pago.",
      "Administración de productos e inventario, con alertas de stock bajo.",
      "Manejo de productos fraccionados y control de materias primas.",
      "Registro de producción y reportes de ventas.",
    ],
    resultados: [
      "Digitalización de procesos de venta, inventario y producción.",
      "Una herramienta adaptada a los procesos concretos del comercio.",
    ],
    tecnologias: ["React", "Node.js", "Express", "MySQL"],
    imagenes: [
      { archivo: "/img/solymar/acceso-sistema.webp", descripcion: "Pantalla de acceso al sistema" },
      { archivo: "/img/solymar/punto-de-venta.webp", descripcion: "Módulo de ventas y administración de tickets" },
      { archivo: "/img/solymar/produccion-insumos.webp", descripcion: "Módulo de producción e insumos" },
    ],
    enlaces: { demo: "", repositorio: "" },
  },
  {
    id: "ecosistema-crazy",
    nombre: "Ecosistema digital Crazy For You",
    categoria: "desarrollo",
    etiqueta: "E-commerce · Fidelización · POS",
    cliente: "Crazy For You",
    estado: "En desarrollo",
    destacado: true,
    portada: "/img/og/diagrama-ecosistema.svg",
    portadaAlt: "Diagrama conceptual de una tienda online, una plataforma de fidelización y un punto de venta conectados",
    resumen:
      "La evolución del entorno digital de la marca: integrar la tienda online, Club Crazy y el punto de venta en una experiencia conectada.",
    rol: "Diseño de la solución y desarrollo de la plataforma.",
    contexto:
      "La tienda trabaja con distintos canales y herramientas para atender las ventas presenciales, las compras online y la fidelización de sus clientas.",
    desafio:
      "Avanzar hacia una operación más integrada, reduciendo tareas duplicadas y facilitando que la información de cada canal se relacione.",
    solucion:
      "Estoy desarrollando una solución que conecta las distintas piezas del ecosistema: e-commerce, Club Crazy y punto de venta. El objetivo es que los canales compartan información y acompañen el recorrido de cada clienta.",
    funcionalidades: [
      "Plataforma de e-commerce.",
      "Integración con el programa de fidelización Club Crazy.",
      "Punto de venta para la operación del local.",
      "Unificación progresiva de información entre canales.",
    ],
    resultados: [
      "Proyecto en desarrollo: la integración se está construyendo por etapas.",
    ],
    tecnologias: ["React", "Node.js", "Express", "MySQL"],
    imagenes: [],
    enlaces: { demo: "", repositorio: "" },
  },
  {
    id: "boour",
    nombre: "BOOUR",
    categoria: "desarrollo",
    etiqueta: "Aplicación para estrategia de marca",
    cliente: "Proyecto propio",
    estado: "En desarrollo",
    destacado: true,
    portada: "/img/boour/boour.png",
    portadaAlt: "Esquema de una aplicación digital para trabajar la estrategia de marca",
    resumen: "Una aplicación que estoy desarrollando para organizar el análisis, la investigación y la planificación estratégica de una marca.",
    rol: "Definición del producto, diseño de la arquitectura y desarrollo.",
    contexto: "La idea surgió de mi trabajo con marcas y de la necesidad de reunir en un mismo lugar información, análisis y decisiones de marketing.",
    desafio: "Construir una herramienta que ayude a pasar de la información dispersa a un plan de trabajo claro, sin convertir el proceso en algo difícil de usar.",
    solucion: "Estoy desarrollando BOOUR con una arquitectura híbrida: React para la interfaz, Node.js para la API y Python para los procesos que requieren ese entorno. El proyecto contempla funciones de investigación y análisis para acompañar el trabajo estratégico de marca.",
    funcionalidades: [
      "Gestión de proyectos y marcas.",
      "Espacio de diagnóstico y análisis de marca.",
      "Investigación y consulta de información mediante un buscador autogestionado.",
      "Organización de resultados para apoyar la planificación estratégica."
    ],
    resultados: ["Proyecto propio en desarrollo. La arquitectura y las funcionalidades se están definiendo e implementando por etapas."],
    tecnologias: ["React", "Node.js", "Express", "Python", "SearXNG"],
    imagenes: [],
    enlaces: { demo: "", repositorio: "" }
  },
  {
    id: "marketing-crazy",
    nombre: "Marketing y comunicación de Crazy For You",
    categoria: "marketing",
    etiqueta: "Estrategia · Contenido · Métricas",
    cliente: "Crazy For You",
    estado: "En curso",
    destacado: true,
    portada: "/img/marketing/metricas-instagram.webp",
    portadaAlt: "Panel de estadísticas de Instagram correspondiente a agosto de 2026",
    resumen:
      "Estrategia de contenidos y comunicación para una marca de belleza y accesorios: planificación, producción creativa, campañas y análisis de resultados.",
    rol: "Community management, planificación estratégica, creación de contenido y seguimiento de métricas.",
    contexto:
      "La comunicación digital debía acompañar la identidad de la tienda, mostrar sus productos y promociones, y construir una relación más cercana con su comunidad.",
    desafio:
      "Equilibrar el contenido comercial con piezas que generen participación y comunidad, manteniendo una comunicación reconocible y coherente en los distintos formatos.",
    solucion:
      "Planifico contenidos y campañas, produzco y edito piezas gráficas y audiovisuales, y reviso las estadísticas para identificar qué acciones generan más alcance, visitas e interacción. La campaña del octavo aniversario fue una de las acciones medidas con resultados concretos.",
    funcionalidades: [
      "Planificación de contenidos para Instagram y otros canales digitales.",
      "Producción de fotografías, reels, historias y piezas gráficas.",
      "Diseño y ejecución de campañas promocionales y acciones de comunidad.",
      "Gestión de publicaciones y seguimiento desde Meta Business Suite.",
      "Análisis de alcance, visualizaciones, interacciones, visitas y seguidores.",
    ],
    resultados: [
      "176.300 visualizaciones en Instagram durante la campaña del octavo aniversario (+95,5 % respecto del período de comparación).",
      "4.300 interacciones con el contenido (+299 %).",
      "141 nuevos seguidores (+51,6 %).",
    ],
    periodoMetricas: "Campaña del octavo aniversario · del 1 al 31 de agosto de 2026. Variaciones respecto del período anterior.",
    tecnologias: ["Meta Business Suite", "Canva", "Edits", "CapCut", "Adobe Express"],
    imagenes: [
      { archivo: "/img/marketing/metricas-instagram.webp", descripcion: "Estadísticas de Instagram del 1 al 31 de agosto de 2026, comparadas con el período anterior" },
    ],
    enlaces: { demo: "", repositorio: "" },
  },
];
