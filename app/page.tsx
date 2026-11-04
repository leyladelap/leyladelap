import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";
import HomeEditorialHero from "@/components/HomeEditorialHero";

const worlds = [
  {
    num: "01",
    title: "Presencia",
    text: "Escuchar el cuerpo, la respiración, los pensamientos y las emociones sin exigir respuestas inmediatas.",
  },
  {
    num: "02",
    title: "Identidad",
    text: "Explorar las versiones que has sido, las expectativas que cargas y aquello que hoy eliges para ti.",
  },
  {
    num: "03",
    title: "Vínculos",
    text: "Observar cómo amas, cómo pones límites y cómo cuidas tu identidad en relación con otros.",
  },
  {
    num: "04",
    title: "Sostén",
    text: "Dar lugar a tu libertad en decisiones, hábitos y proyectos que puedas sostener en la vida cotidiana.",
  },
];

const audienceSignals = [
  "Tu vida puede estar llena de cosas buenas y, aun así, puedes preguntarte si algunas todavía encajan contigo.",
  "Tal vez estás cambiando de rumbo, de ciudad, de relación o de forma de entenderte.",
  "Te interesa conocerte, pero también aprender a elegir y construir desde lo que descubres.",
];

const offers = [
  {
    index: "01",
    status: "SESIÓN PRIVADA",
    title: "Casa Interior",
    body: "Una sesión individual para explorar lo que estás viviendo mediante yoga restaurativo, respiración, sonido, presencia y conversación.",
    detail: "Un espacio íntimo para escuchar tus propias preguntas.",
  },
  {
    index: "02",
    status: "PRÁCTICA GUIADA",
    title: "Meditaciones",
    body: "Encuentros de meditación, respiración y atención al cuerpo para observar lo que sucede dentro de una vida que sigue moviéndose.",
    detail: "También puedes inscribirte a la meditación de los domingos.",
  },
  {
    index: "03",
    status: "EN PREPARACIÓN",
    title: "Entre versiones",
    body: "Una experiencia grupal online para mujeres que atraviesan cambios y desean explorar quiénes han sido, qué sienten y qué vida quieren construir.",
    detail: "Propuesta de cuatro semanas, con filosofía del yoga, meditación, movimiento y escritura. Sin fechas abiertas todavía.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Leyla de la Peña, inicio">
          <Image
            src="/logo-primary.png"
            width={180}
            height={110}
            alt="Leyla de la Peña"
            priority
            className="header-logo"
          />
        </a>
        <nav className="nav" aria-label="Navegación principal">
          <a href="#experiences">EXPERIENCES</a>
          <a href="#method">EL UNIVERSO</a>
          <a href="#bitacora">BITÁCORA</a>
          <a href="#halo">HALO</a>
          <a href="#about">ABOUT</a>
        </nav>
        <a className="nav-cta" href="#experiences">EMPEZAR</a>
      </header>

      <HomeEditorialHero />

      <section className="recognition" aria-labelledby="recognition-title">
        <div className="recognition-heading">
          <p className="section-kicker">PARA QUIÉN ES</p>
          <h2 id="recognition-title">Conocerte. Elegirte. Construir.</h2>
        </div>
        <div className="signal-grid">
          {audienceSignals.map((signal, index) => (
            <article className="signal-card" key={signal}>
              <span>0{index + 1}</span>
              <p>{signal}</p>
            </article>
          ))}
        </div>
        <p className="recognition-note">
          Un universo de autoexploración para mujeres que quieren conocerse más profundamente y construir una vida que se sienta verdaderamente suya.
        </p>
      </section>

      <section className="experiences" id="experiences" aria-labelledby="experiences-title">
        <div className="section-heading split-heading">
          <div>
            <p className="section-kicker">EXPERIENCES</p>
            <p className="section-overline">CÓMO PUEDES EMPEZAR</p>
          </div>
          <div>
            <h2 id="experiences-title">Hay distintas formas de explorar lo que estás viviendo.</h2>
            <p className="section-intro">Meditación, experiencias individuales y un programa grupal en preparación. Cada propuesta tiene su propio ritmo y un espacio para tus preguntas.</p>
          </div>
        </div>

        <div className="offer-grid">
          {offers.map((offer) => (
            <article className="offer-card" key={offer.title}>
              <div className="offer-meta">
                <span>{offer.index}</span>
                <span>{offer.status}</span>
              </div>
              <h3>{offer.title}</h3>
              <p className="offer-body">{offer.body}</p>
              <p className="offer-detail">{offer.detail}</p>
              {offer.title === "Entre versiones" ? (
                <a className="card-link" href="#halo">Conocer Entre versiones <span>↘</span></a>
              ) : offer.title === "Meditaciones" ? (
                <a className="card-link" href="/meditacion">Registrarme <span>↘</span></a>
              ) : (
                <a className="card-link" href="#about">Conocer el enfoque <span>↘</span></a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="method" id="method" aria-labelledby="method-title">
        <div className="method-intro">
          <p className="section-kicker">EL UNIVERSO</p>
          <h2 id="method-title">No hay una sola manera de conocernos.</h2>
          <p>
            La identidad, la presencia, los vínculos, la libertad y el sostén se entrelazan. Lo que descubrimos de nosotras también necesita encontrar su lugar en nuestras relaciones, decisiones y vida cotidiana.
          </p>
        </div>
        <div className="worlds">
          {worlds.map((world) => (
            <article className="world" key={world.title}>
              <span className="world-num">{world.num}</span>
              <h3>{world.title}</h3>
              <p>{world.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial" id="bitacora" aria-labelledby="bitacora-title">
        <div className="editorial-panel">
          <div className="editorial-copy">
            <p className="section-kicker light">BITÁCORA</p>
            <h2 id="bitacora-title">Escribo para observar lo que voy viviendo.</h2>
            <p>Pensamientos, historias, filosofía, preguntas y escenas cotidianas. La Bitácora es un espacio para compartir lo que voy descubriendo en la experiencia de vivir.</p>
          </div>
          <div className="editorial-mark" aria-hidden="true">
            <span>viviendo</span>
            <span>escenas</span>
          </div>
        </div>
        <aside className="editorial-aside">
          <p>UN ARCHIVO PERSONAL EN CONSTRUCCIÓN.</p>
          <p>Texto · foto · video · audio</p>
          <p className="aside-note">Un espacio para leer, preguntarnos y dejar algunas cosas sin respuesta.</p>
        </aside>
      </section>

      <section className="halo" id="halo" aria-labelledby="halo-title">
        <div className="halo-art" aria-hidden="true">
          <div className="halo-circle" />
          <span className="halo-dot" />
          <span className="halo-word">HALO</span>
        </div>
        <div className="halo-content">
          <p className="section-kicker light">HALO · EN CONSTRUCCIÓN</p>
          <h2 id="halo-title">Un espacio que está tomando forma.</h2>
          <p className="halo-lead">
            HALO es un proyecto en construcción. Por ahora no es una membresía activa y todavía no hay fechas ni contenidos anunciados.
          </p>
          <ul className="halo-list">
            <li>Un proyecto que todavía está encontrando su forma.</li>
            <li>Sin inscripciones ni calendario anunciados.</li>
            <li>Próximamente habrá más información.</li>
          </ul>
          <div className="halo-form-wrap">
            <p className="halo-form-title">HALO, próximamente.</p>
            <p className="halo-form-copy">El formulario existente permite dejar un correo para recibir novedades cuando haya información confirmada.</p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="about-label">
          <p className="section-kicker">ABOUT LEYLA</p>
          <span>YOGA · MEDITACIÓN · RESPIRACIÓN · FILOSOFÍA · SONIDO · EXPERIENCIA</span>
        </div>
        <div className="about-copy">
          <h2 id="about-title">No llegué aquí porque tuviera todas las respuestas.</h2>
          <div className="about-columns">
            <p>
              Durante mucho tiempo pensé que para entender mi vida necesitaba encontrar respuestas. Y después la vida empezó a hacerme preguntas que no sabía contestar. Perder a mi mamá cambió muchas cosas en la forma en que miraba el tiempo, el amor y la posibilidad de que todo cambie de un día para otro. No fue el comienzo de una historia perfecta de crecimiento. Hubo tristeza, contradicciones y días en los que simplemente no sabía qué hacer con lo que sentía. Empecé a escribir, a observarme y a preguntarme qué significaba estar viva, cómo quería amar y qué cosas merecían mi atención. Algunas preguntas siguen conmigo. Con el tiempo entendí que no todas necesitan una respuesta inmediata.
            </p>
            <p>
              Los viajes me permitieron conocer otras formas de vivir y también distintas versiones de mí. Pasé diez meses en India, donde profundicé en el yoga, la meditación y la filosofía, y seguí encontrando preguntas en lugares, personas y experiencias que no imaginaba. Mi relación con Dios, la práctica y la escritura no ha sido un camino recto ni una historia de iluminación. También he tenido miedo, he buscado certezas en mis relaciones y me he preguntado cómo amar sin dejar de elegirme. Hoy hay otra pregunta que me acompaña: cómo construir una vida creativa, libre y sostenible, con independencia y raíces, sin perder el disfrute de lo cotidiano. De ahí nace este espacio. Soy profesora de yoga y meditación, formada en Hatha, Ashtanga Vinyasa y Yin, pero lo que comparto no cabe solamente dentro de una clase. A través del cuerpo, la respiración, la filosofía, el sonido, la escritura y las experiencias compartidas, creo espacios para explorar quiénes somos, cómo nos relacionamos y qué queremos construir. No tengo todo resuelto. Sigo aprendiendo a vivir lo que voy descubriendo.
            </p>
          </div>
          <blockquote>“Conocernos también es aprender a vivir de acuerdo con lo que descubrimos.”</blockquote>
        </div>
      </section>

      <section className="books" aria-labelledby="books-title">
        <p className="section-kicker">BOOKS</p>
        <div className="books-grid">
          <h2 id="books-title">Un espacio editorial que sigue tomando forma.</h2>
          <div>
            <p>Los proyectos de esta sección todavía están en desarrollo.</p>
            <p>Compartiré más información cuando haya algo concreto que contar.</p>
            <span className="coming-soon">PROYECTOS EDITORIALES · EN DESARROLLO</span>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-title">
        <p className="section-kicker">SI NO SABES POR DÓNDE EMPEZAR</p>
        <h2 id="final-title">Tal vez una conversación, una práctica o una pregunta sea un buen comienzo.</h2>
        <div className="final-actions">
          <a className="button button-primary" href="#experiences">Ver experiencias</a>
          <a className="button button-secondary" href="#halo">HALO en construcción</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <Image src="/logo-primary.png" width={190} height={115} alt="Leyla de la Peña" className="footer-logo" />
          <p>A personal universe for self-discovery.</p>
        </div>
        <div className="footer-links">
          <a href="#experiences">EXPERIENCES</a>
          <a href="#method">EL UNIVERSO</a>
          <a href="#bitacora">BITÁCORA</a>
          <a href="#halo">HALO</a>
          <a href="#about">ABOUT</a>
        </div>
        <p className="legal">Este espacio acompaña procesos de exploración personal y no sustituye atención médica ni psicológica.</p>
      </footer>
    </main>
  );
}
