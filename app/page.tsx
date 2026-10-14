import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

const worlds = [
  {
    num: "01",
    title: "Volver a ti",
    text: "Bajar el ruido y volver al cuerpo, la respiración y el presente.",
  },
  {
    num: "02",
    title: "Conocerte",
    text: "Observar tus patrones, preguntas, emociones, límites y forma de habitarte.",
  },
  {
    num: "03",
    title: "Expresarte",
    text: "Dar espacio a tu voz, creatividad, movimiento, estética e identidad.",
  },
  {
    num: "04",
    title: "Vivirlo",
    text: "Llevar lo que descubres a decisiones, relaciones, viajes y vida cotidiana.",
  },
];

const audienceSignals = [
  "Funcionas, cumples y haces, pero a veces sientes que vas en automático.",
  "Quieres bajar la exigencia sin convertirte en una versión nueva de ti.",
  "Buscas prácticas y experiencias que te ayuden a escucharte con más presencia.",
];

const offers = [
  {
    index: "01",
    status: "SESIÓN PRIVADA",
    title: "Casa Interior",
    body: "Un espacio 1:1 que reúne yoga, respiración, presencia y experiencia sensorial para acompañarte a volver al cuerpo y escucharte.",
    detail: "Para quien quiere una experiencia personal y acompañada.",
  },
  {
    index: "02",
    status: "PRÁCTICA A TU RITMO",
    title: "Meditaciones",
    body: "Meditaciones guiadas, respiración y prácticas de quietud para crear pequeños espacios de presencia dentro de tu vida real.",
    detail: "Para quien quiere empezar por una práctica sencilla y repetible.",
  },
  {
    index: "03",
    status: "PRÓXIMAMENTE",
    title: "HALO",
    body: "Una membresía digital recurrente con meditaciones, Yoga Nidra, respiración, sonido, prácticas corporales, contemplaciones y encuentros.",
    detail: "Para quien quiere profundizar y sostener una práctica en comunidad.",
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

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">A PERSONAL UNIVERSE FOR SELF-DISCOVERY</p>
          <h1 id="hero-title">Volver a ti.</h1>
          <p className="hero-positioning">
            Espacios de autoexploración para mujeres que quieren salir del piloto automático y volver a habitar su propia vida.
          </p>
          <p className="hero-detail">
            Soy Leyla de la Peña. Reúno cuerpo, respiración, meditación, filosofía, sonido, creatividad y experiencia para acompañarte a escucharte con más presencia y vivir de una forma más propia.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experiences">Explorar experiencias</a>
            <a className="button button-secondary" href="#method">Conocer cómo trabajo</a>
          </div>
          <div className="hero-proof" aria-label="Formas de entrar al universo">
            <span>Sesiones privadas</span>
            <span>Meditaciones guiadas</span>
            <span>HALO membership</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Identidad Leyla de la Peña">
          <div className="hero-logo-card">
            <Image
              src="/logo-primary.png"
              width={560}
              height={340}
              alt="Leyla de la Peña"
              priority
              className="hero-logo"
            />
            <p className="hero-manifesto">No busco decirte quién debes ser.</p>
            <p className="hero-signature">No enseño. Acompaño.</p>
          </div>
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
        </div>
      </section>

      <section className="recognition" aria-labelledby="recognition-title">
        <div className="recognition-heading">
          <p className="section-kicker">PARA QUIÉN ES</p>
          <h2 id="recognition-title">Puedes estar haciendo todo “bien” y aun así sentir que no estás del todo dentro de tu vida.</h2>
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
          Aquí no hay una versión correcta de ti que alcanzar. Hay prácticas, preguntas y experiencias para que puedas escucharte y elegir desde un lugar más consciente.
        </p>
      </section>

      <section className="experiences" id="experiences" aria-labelledby="experiences-title">
        <div className="section-heading split-heading">
          <div>
            <p className="section-kicker">EXPERIENCES</p>
            <p className="section-overline">CÓMO PUEDES EMPEZAR</p>
          </div>
          <div>
            <h2 id="experiences-title">Elige la puerta que más se parece a lo que necesitas hoy.</h2>
            <p className="section-intro">No necesitas empezar por todo. Una sesión, una práctica o una pregunta pueden ser suficiente para abrir espacio.</p>
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
              {offer.title === "HALO" ? (
                <a className="card-link" href="#halo">Entrar a la lista de espera <span>↘</span></a>
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
          <h2 id="method-title">Cuatro movimientos. No cuatro pasos obligatorios.</h2>
          <p>
            La autoexploración no ocurre en línea recta. A veces vuelves al cuerpo. Otras veces necesitas entenderte, expresarte o simplemente vivir algo distinto. Este universo se organiza alrededor de esas cuatro posibilidades.
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
            <h2 id="bitacora-title">Una vida también puede leerse por escenas.</h2>
            <p>Viajes, historias, filosofía, libros, preguntas, imágenes y pequeñas cosas que merecían quedarse.</p>
          </div>
          <div className="editorial-mark" aria-hidden="true">
            <span>viviendo</span>
            <span>escenas</span>
          </div>
        </div>
        <aside className="editorial-aside">
          <p>BITÁCORA ES EL ARCHIVO DEL UNIVERSO.</p>
          <p>Texto · foto · video · audio</p>
          <p className="aside-note">Un lugar para mirar la experiencia antes de convertirla en conclusión.</p>
        </aside>
      </section>

      <section className="halo" id="halo" aria-labelledby="halo-title">
        <div className="halo-art" aria-hidden="true">
          <div className="halo-circle" />
          <span className="halo-dot" />
          <span className="halo-word">HALO</span>
        </div>
        <div className="halo-content">
          <p className="section-kicker light">HALO · THE MEMBERSHIP</p>
          <h2 id="halo-title">Un espacio recurrente para profundizar sin vivir corriendo hacia la siguiente meta.</h2>
          <p className="halo-lead">
            Meditaciones, Yoga Nidra, respiración, sonido, prácticas corporales, contemplaciones y encuentros dentro de un ritmo más sostenido.
          </p>
          <ul className="halo-list">
            <li>Prácticas que puedes repetir a tu ritmo.</li>
            <li>Exploraciones nuevas a lo largo del tiempo.</li>
            <li>Un espacio para acompañar el proceso, no para prometer resultados rápidos.</li>
          </ul>
          <div className="halo-form-wrap">
            <p className="halo-form-title">Únete a la lista de espera.</p>
            <p className="halo-form-copy">Te escribiré cuando HALO esté listo para abrir.</p>
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
          <h2 id="about-title">Este universo nace de haber buscado muchas respuestas y, con el tiempo, aprender a hacer mejores preguntas.</h2>
          <div className="about-columns">
            <p>
              He vivido y estudiado prácticas de yoga y meditación en India, y mi trabajo reúne cuerpo, respiración, filosofía, introspección, sonido, escritura y experiencia cotidiana.
            </p>
            <p>
              No me interesa construir una figura de gurú ni darte una fórmula para convertirte en otra persona. Me interesa crear contextos donde puedas bajar el ruido suficiente para escucharte.
            </p>
          </div>
          <blockquote>“Encuentra tu ser más auténtico, libre y vive desde ese lugar.”</blockquote>
        </div>
      </section>

      <section className="books" aria-labelledby="books-title">
        <p className="section-kicker">BOOKS</p>
        <div className="books-grid">
          <h2 id="books-title">Historias que toman otra forma cuando llegan al papel.</h2>
          <div>
            <p>Mi libro personal está en proceso.</p>
            <p>También estoy desarrollando proyectos para la infancia alrededor de una tortuga, el agua y los nenúfares.</p>
            <span className="coming-soon">EDITORIAL PROJECTS · IN DEVELOPMENT</span>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-title">
        <p className="section-kicker">SI NO SABES POR DÓNDE EMPEZAR</p>
        <h2 id="final-title">Empieza por una experiencia que te devuelva al presente.</h2>
        <div className="final-actions">
          <a className="button button-primary" href="#experiences">Ver experiencias</a>
          <a className="button button-secondary" href="#halo">Conocer HALO</a>
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
