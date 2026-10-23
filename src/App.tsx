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
      'Procesamiento documental, extracción de información, validación de datos y persistencia. La ficha final reflejará la arquitectura real del producto.',
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
      'Generación de documentos, integración de servicios y diseño de flujos documentales. Añadiremos los detalles de arquitectura a partir del código real.',
  },
]


function App() {
  useReveal()
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const [lightPosition, setLightPosition] = useState({
    x: 50,
    y: 50,
  })
  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  })

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
          <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>Sobre mí</a>
          <a href="#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
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
          <p className="eyebrow">01 — SOBRE MÍ</p>
          <h2>
            La curiosidad es el inicio.
            <br />
            <span className="muted-text">La ingeniería, el camino.</span>
          </h2>
        </div>

        <div className="about-content" data-reveal>
          <p>
            Me interesa entender cómo funcionan las cosas, encontrar
            patrones y construir soluciones que tengan una utilidad real.
            Trabajo entre el desarrollo de software, los datos y la IA aplicada.
          </p>
          <div className="skill-tags">
            {['Python', 'SQL', 'APIs', 'Data', 'LLMs', 'SaaS', 'Automation'].map(
              (skill) => <span key={skill}>{skill}</span>,
            )}
          </div>
        </div>
      </section>

      <section className="projects section" id="proyectos">
        <div className="projects-heading" data-reveal>
          <div>
            <p className="eyebrow">02 — TRABAJO SELECCIONADO</p>
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
        <p className="eyebrow">03 — SIGUIENTE PASO</p>
        <h2>
          ¿Construimos algo
          <br />
          <span className="gradient-text">interesante?</span>
        </h2>
        <p className="footer-description">
          Busco oportunidades donde combinar desarrollo, datos e
          inteligencia artificial para resolver problemas reales.
        </p>
        <a className="button-primary" href="mailto:TU_EMAIL_AQUI">
          Hablemos <span>↗</span>
        </a>
        <div className="footer-bottom">
          <a className="brand" href="#inicio"><span className="brand-mark">A.</span> ANA PELÁEZ</a>
          <span>DISEÑADO Y DESARROLLADO CON CURIOSIDAD.</span>
          <a href="#inicio">VOLVER ARRIBA ↑</a>
        </div>
      </footer>
    </main>
  )
}

export default App
