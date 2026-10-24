import perfil from './assets/perfil.jpg'
import logo from './assets/AP.png'
import { useRef, useState, type CSSProperties } from 'react'
import './App.css'
import { useReveal } from './useReveal'



const projects = [
  {
    number: '01',
    name: 'iAtlas',
    type: 'AUTOMATIZACIÓN · IA',
    description:
      'Plataforma para analizar facturas y transformar documentos en datos estructurados.',
    stack: ['Python', 'OCR', 'SQL'],
    symbol: '↗',
    details:
      'I.ATLAS es un software avanzado de automatización contable que utiliza un doble motor híbrido (algoritmos matemáticos + modelos de lenguaje avanzados en la nube) para el análisis fiscal masivo, diseñado específicamente para despachos, gestorías y profesionales. Combina Reconocimiento Óptico de Caracteres (OCR) de alta precisión con Inteligencia Artificial (IA) para extraer, auditar y clasificar facturas de forma masiva en cuestión de segundos, eliminando por completo el trabajo manual de "picar datos"',
  },
  {
    number: '02',
    name: 'PegasIA',
    type: 'IA APLICADA · SAAS',
    description:
      'Generación documental jurídica mediante una plataforma de software orientada a procesos profesionales.',
    stack: ['Python', 'APIs', 'LLM'],
    symbol: '⌘',
    details:
      'PegasIA es una plataforma SaaS B2B diseñada para despachos legales. Permite automatizar la generación de documentos y contratos jurídicos a partir de plantillas Word, utilizando un escáner inteligente de variables e Inteligencia Artificial para redactar o mejorar cláusulas formales de manera segura y aislada por despacho.',
  },
]


function App() {
  useReveal()
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const [lightPosition, setLightPosition] = useState({
    x: 50,
    y: 50,
  })
  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  })

  const services = [
  {
    title: 'Automatizaciones',
    description:
      'Automatizo tareas y conecto herramientas, datos y procesos para reducir el trabajo manual, ahorrar horas y mejorar la eficiencia. Integro inteligencia artificial cuando aporta valor.',
  },
  {
    title: 'Ciencia y análisis de datos',
    description:
      'Transformo datos en información útil mediante Python y SQL para detectar patrones, comprender resultados y ayudar a tomar decisiones mejor fundamentadas.',
  },
  {
    title: 'Desarrollo de software',
    description:
      'Desarrollo aplicaciones, APIs y herramientas a medida para resolver necesidades concretas, digitalizar procesos y convertir ideas en productos funcionales.',
  },
  {
    title: 'Python e inteligencia artificial',
    description:
      'Creo soluciones con Python e IA, desde el procesamiento inteligente de documentos hasta la integración de modelos y APIs para resolver tareas complejas.',
  },
]

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <a className="brand" href="#inicio" aria-label="Inicio">
          <img src={logo} alt="Logo de Ana Peláez" className="logo" />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir o cerrar navegación"
          aria-expanded={menuOpen}
        >
          {menuOpen ? 'Cerrar −' : 'Menú +'}
        </button>

        
<nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
  <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>
    Sobre mí
  </a>

  <a href="#proyectos" onClick={() => setMenuOpen(false)}>
    Proyectos
  </a>

  <a href="#contacto" onClick={() => setMenuOpen(false)}>
    Contacto
  </a>

  <div className="nav-cv">
    <button
      type="button"
      className="nav-cv-toggle"
      aria-label="Elegir currículum"
    >
      Currículum <span>↗</span>
    </button>

    <div className="nav-cv-menu">
      <a
        href="/cv-ana-pelaez-es.pdf"
        target="_blank"
        rel="noreferrer"
        onClick={() => setMenuOpen(false)}
      >
        Español ↗
      </a>

      <a
        href="/cv-ana-pelaez-en.pdf"
        target="_blank"
        rel="noreferrer"
        onClick={() => setMenuOpen(false)}
      >
        English ↗
      </a>
    </div>
  </div>
</nav>


          <a
          href="/cv-ana-pelaez.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Currículum
        </a>

        <a className="availability" href="#contacto">
          <span className="status-dot" />
          Abierta a oportunidades
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="profile-intro" data-reveal>
          <img
            className="profile-photo"
            src={perfil}
            alt="Retrato de Ana Peláez"
          />

          <div className="profile-info">
            <h2>Ana Peláez</h2>
            <p>AI & Python Developer | Data Science & Process Automation | SaaS</p>
            <span className="profile-location">
              <span aria-hidden="true">⌖</span>
              Sevilla, España
            </span>
          </div>
        </div>
          <p className="eyebrow">
            <span className="eyebrow-line" />
            SOFTWARE · DATA · ARTIFICIAL INTELLIGENCE
          </p>

          <h1>
            Ideas complejas.
            <br />
            <span className="gradient-text">Soluciones reales.</span>
          </h1>

          <p className="hero-description">
            Diseño y desarrollo software que convierte problemas complejos
            en herramientas útiles, combinando inteligencia artificial,
            datos y pensamiento de ingeniería.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#proyectos">
              Explorar proyectos <span>↗</span>
            </a>
            <a className="button-secondary" href="#sobre-mi">
              Conocer mi enfoque <span>↓</span>
            </a>
          </div>

          <div className="hero-meta">
            <span>01 / 03 — PERFIL</span>
            <span>Construido con curiosidad <span className="heart">♥</span></span>
          </div>
        </div>

        <div

          ref={visualRef}
          className="visual"
          aria-label="Visualización abstracta de una red digital"
          onPointerMove={(event) => {
            const bounds = event.currentTarget.getBoundingClientRect()

            const x = ((event.clientX - bounds.left) / bounds.width) * 100
            const y = ((event.clientY - bounds.top) / bounds.height) * 100

            setLightPosition({ x, y })
            setTilt({
              x: ((y - 50) / 50) * -6,
              y: ((x - 50) / 50) * 6,
            })
          }}
          onPointerLeave={() => {
            setLightPosition({ x: 50, y: 50 })
            setTilt({ x: 0, y: 0 })
          }}
          style={{
            '--light-x': `${lightPosition.x}%`,
            '--light-y': `${lightPosition.y}%`,
            '--tilt-x': `${tilt.x}deg`,
            '--tilt-y': `${tilt.y}deg`,
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          } as CSSProperties}
        >
          <div className="visual-label label-top">
            <span className="status-dot" /> SYSTEM THINKING
          </div>

          <div className="orbit orbit-outer">
            <span className="orbit-node node-one" />
            <span className="orbit-node node-two" />
          </div>
          <div className="orbit orbit-middle">
            <span className="orbit-node node-three" />
          </div>
          <div className="orbit orbit-inner" />

          <div className="core">
            <span className="core-symbol">A<span>.</span></span>
            <span className="core-caption">BUILDING WHAT'S NEXT</span>
          </div>

          <div className="floating-card card-top">
            <span className="card-icon">⌘</span>
            <span><strong>ENGINEERING</strong><small>From idea to system</small></span>
          </div>

          <div className="floating-card card-bottom">
            <span className="card-icon purple-icon">✳</span>
            <span><strong>AI + DATA</strong><small>Turning complexity into value</small></span>
          </div>

          <div className="visual-label label-bottom">EXPLORING POSSIBILITIES <span>✳</span></div>
        </div>

        <div className="scroll-cue">
          <span className="scroll-line" />
          SCROLL PARA EXPLORAR
        </div>
      </section>

      <section className="about section" id="sobre-mi">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">SOBRE MÍ</p>
          <h2>
            La curiosidad es el inicio.
            <br />
            <span className="muted-text">La ingeniería, el camino.</span>
          </h2>
        </div>

        <div className="about-content" data-reveal>
          <p>
            Desarrolladora de software especializada en Python, Inteligencia Artificial y automatización de procesos,
            con Máster en Data Science, Big Data e IA.

            Fundadora y desarrolladora de iAtlas (SaaS de automatización contable y procesamiento documental con IA) y 
            PegasIA (plataforma SaaS B2B para la generación inteligente y segura de contratos jurídicos por despacho).

            Perfil analítico y orientado a resultados, con sólida experiencia 
            en desarrollo backend, gestión de proyectos y creación de soluciones tecnológicas de utilidad real.
          </p>
          <div className="skill-tags">
            {['Python', 'SQL', 'APIs', 'Data', 'LLMs', 'SaaS', 'Automation'].map(
              (skill) => <span key={skill}>{skill}</span>,
            )}
          </div>
        </div>
      </section>


<section className="services-section" id="servicios">
  <div className="section-heading" data-reveal>
    <p className="eyebrow">¿QUÉ PUEDO APORTAR?</p>
    <h2>¿En qué puedo ayudarte?</h2>
    <p>
      Soluciones tecnológicas pensadas para resolver problemas reales.
    </p>
  </div>

  <div className="services-grid">
    {services.map((service, index) => {
      const isExpanded = expandedService === index

      return (
        <article
          className={`service-card ${isExpanded ? 'expanded' : ''}`}
          key={service.title}
          data-reveal
        >
          <button
            className="service-toggle"
            type="button"
            aria-expanded={isExpanded}
            onClick={() =>
              setExpandedService(isExpanded ? null : index)
            }
          >
            <span className="service-number">
              0{index + 1}
            </span>

            <span className="service-title">
              {service.title}
            </span>

            <span className="service-plus" aria-hidden="true">
              {isExpanded ? '−' : '+'}
            </span>
          </button>

          <div
            className={`service-description ${isExpanded ? 'is-open' : ''}`}
            hidden={!isExpanded}
          >
            <p>{service.description}</p>
          </div>
        </article>
      )
    })}
  </div>
</section>


      <section className="projects section" id="proyectos">
        <div className="projects-heading" data-reveal>
          <div>
            <p className="eyebrow">TRABAJO SELECCIONADO</p>
            <h2>Ideas en <span className="gradient-text">producción.</span></h2>
          </div>
          <span className="project-count">PROYECTOS / 0{projects.length}</span>
        </div>

        <div className="project-grid" data-reveal>
          {projects.map((project) => {
            const isExpanded = expandedProject === project.name

            return (
              <article
                className={`project-card ${isExpanded ? 'tarjeta-abierta' : ''}`}
                key={project.name}
                onPointerMove={(event) => {
                  const bounds = event.currentTarget.getBoundingClientRect()
                  const x = ((event.clientX - bounds.left) / bounds.width) * 100
                  const y = ((event.clientY - bounds.top) / bounds.height) * 100

                  event.currentTarget.style.setProperty('--card-x', `${x}%`)
                  event.currentTarget.style.setProperty('--card-y', `${y}%`)
                }}
              >
                <div className="project-card-top">
                  <span>{project.number} / CASE STUDY</span>
                  <span className="project-symbol">{project.symbol}</span>
                </div>

                <p className="project-type">{project.type}</p>
                <h3>{project.name}<span>.</span></h3>
                <p className="project-description">{project.description}</p>

                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {isExpanded && (
                  <div className="project-details">
                    <p className="details-label">DETALLES TÉCNICOS</p>
                    <p>{project.details}</p>
                  </div>
                )}

                <button
                  className="project-link"
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() =>
                    setExpandedProject(isExpanded ? null : project.name)
                  }
                >
                  {isExpanded ? 'Cerrar detalles' : 'Explorar arquitectura'}
                  <span>{isExpanded ? '−' : '↗'}</span>
                </button>
              </article>
            )
          })}
        </div>
      </section>

      
<footer className="footer section" id="contacto">
  <div className="footer-content">
    <div className="footer-main" data-reveal>
      <p className="eyebrow">SIGUIENTE PASO</p>

      <h2>
        ¿Construimos algo
        <br />
        <span className="gradient-text">interesante?</span>
      </h2>

      <p className="footer-description">
        Busco oportunidades donde combinar desarrollo, datos e
        inteligencia artificial para resolver problemas reales.
        ¿Necesitas una automatización para tu empresa, software
        a medida o soluciones basadas en datos e IA? Hablemos.
      </p>

      <p className="footer-availability">
        Abierta a oportunidades en desarrollo de software,
        inteligencia artificial y automatización.
      </p>

      <a
        className="button-primary"
        href="mailto:anijuli2893@gmail.com"
      >
        Hablemos <span>↗</span>
      </a>

      <div className="footer-cv">
        <p className="footer-cv-heading">
          ¿Quieres conocer mi experiencia?
        </p>

        <a
          href="/cv-ana-pelaez-es.pdf"
          target="_blank"
          rel="noreferrer"
        >
          CV en español <span>↗</span>
        </a>

        <a
          href="/cv-ana-pelaez-en.pdf"
          target="_blank"
          rel="noreferrer"
        >
          CV in English <span>↗</span>
        </a>
      </div>

    </div>

    <div className="footer-contact" data-reveal>
      <p className="eyebrow">CONTACTO</p>
      <h3>Contacta conmigo</h3>

      <a
        className="footer-contact-item"
        href="mailto:anijuli2893@gmail.com"
      >
        <span className="footer-contact-label">EMAIL</span>
        <span className="footer-contact-value">
          anijuli2893@gmail.com ↗
        </span>
      </a>

      <a
        className="footer-contact-item"
        href="https://www.linkedin.com/in/ana-pel%C3%A1ez-nieto-262193292/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="footer-contact-label">LINKEDIN</span>
        <span className="footer-contact-value">
          Ana Peláez Nieto ↗
        </span>
      </a>

      <a
        className="footer-contact-item"
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="footer-contact-label">GITHUB</span>
        <span className="footer-contact-value">
          Mis proyectos ↗
        </span>
      </a>

      <a
        className="footer-contact-item"
        href="https://iatlas.pro"
        target="_blank"
        rel="noreferrer"
      >
        <span className="footer-contact-label">MI PROYECTO SAAS</span>
        <span className="footer-contact-value">
          iAtlas · iatlas.pro ↗
        </span>
      </a>
    </div>
  </div>

  
<div className="footer-bottom">
  <a className="brand" href="#inicio">
  <img className="brand-logo" src={logo} alt="Ana Peláez" />
</a>

  <span className="footer-signature">
    DISEÑADO Y DESARROLLADO CON CURIOSIDAD.
  </span>

  <a className="footer-back-top" href="#inicio">
    VOLVER ARRIBA ↑
  </a>
</div>

</footer>

    </main>
  )
}

export default App
