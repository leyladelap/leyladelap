import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

const worlds = [
  ["01", "Volver a ti", "cuerpo · respiración · meditación · presencia"],
  ["02", "Conocerte", "filosofía · emociones · introspección · identidad"],
  ["03", "Expresarte", "arte · creatividad · movimiento · estética · voz"],
  ["04", "Vivirlo", "viajes · experiencia · cultura · libertad · vida"],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Leyla de la Peña, inicio">
          <span className="brand-name">LEYLA DE LA PEÑA</span>
        </a>
        <nav className="nav" aria-label="Navegación principal">
          <a href="#bitacora">BITÁCORA</a>
          <a href="#halo">HALO</a>
          <a href="#experiences">EXPERIENCES</a>
          <a href="#books">BOOKS</a>
          <span className="lang">ES / EN</span>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-logo-wrap">
          <Image src="/logo-primary.png" width={430} height={260} alt="Leyla de la Peña" priority className="hero-logo" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">A PERSONAL UNIVERSE FOR SELF-DISCOVERY</p>
          <h1>Volver a ti.</h1>
          <p className="hero-sub">Un universo de autoexploración.</p>
          <a className="text-link" href="#universe">entrar al universo <span>↘</span></a>
        </div>
        <div className="water-line" aria-hidden="true" />
      </section>

      <section className="intro" id="universe">
        <p className="section-kicker">EL UNIVERSO</p>
        <div className="intro-grid">
          <h2>No busco decirte quién debes ser.</h2>
          <div className="intro-copy">
            <p>Creo espacios donde puedas escucharte. Donde el cuerpo, la respiración, la filosofía, el arte y la experiencia se vuelven formas de conocerte.</p>
            <p className="quote">No enseño. Acompaño.</p>
          </div>
        </div>
      </section>

      <section className="worlds">
        {worlds.map(([num, title, text]) => (
          <article className="world" key={title}>
            <span className="world-num">{num}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="scene" id="bitacora">
        <div className="scene-card botanical">
          <span className="tiny">BITÁCORA</span>
          <h2>Una vida también puede leerse por escenas.</h2>
          <p>Viajes, historias, filosofía, pensamientos y pequeñas cosas que merecían quedarse.</p>
          <a className="text-link" href="#">explorar la bitácora <span>↗</span></a>
        </div>
        <div className="scene-note">
          <p>viviendo escenas</p>
          <span>foto · video · audio · texto</span>
        </div>
      </section>

      <section className="experiences" id="experiences">
        <div className="experiences-head">
          <p className="section-kicker">EXPERIENCES</p>
          <h2>Hay cosas que no entendemos hasta que las vivimos.</h2>
        </div>
        <div className="experience-list">
          <div><span>01</span><h3>Casa Interior</h3><p>Sesiones privadas de yoga, respiración, presencia y experiencia sensorial.</p><a href="#">conocer la experiencia</a></div>
          <div><span>02</span><h3>Meditaciones</h3><p>Prácticas guiadas para hacer espacio, escuchar el cuerpo y bajar el ruido.</p><a href="#">escuchar</a></div>
          <div><span>03</span><h3>Encuentros</h3><p>Talleres, colaboraciones y experiencias presenciales que aparecen con el tiempo.</p><a href="#">ver próximos</a></div>
        </div>
      </section>

      <section className="halo" id="halo">
        <div className="halo-orbit" aria-hidden="true"><span /></div>
        <div className="halo-content">
          <p className="section-kicker">HALO</p>
          <h2>the membership</h2>
          <p>No es un curso. No es un reto de treinta días. Es un espacio digital recurrente para profundizar: meditaciones, Yoga Nidra, respiración, sonido, prácticas corporales, contemplaciones y encuentros.</p>
          <WaitlistForm />
        </div>
      </section>

      <section className="books" id="books">
        <p className="section-kicker">BOOKS</p>
        <div className="books-grid">
          <h2>Historias que toman otra forma cuando llegan al papel.</h2>
          <div>
            <p>Mi libro personal está en proceso.</p>
            <p>Más adelante, proyectos para la infancia alrededor de una tortuga, el agua y los nenúfares.</p>
            <a className="text-link" href="#">entrar a books <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-index">LEYLA · 2026</div>
        <div className="about-copy">
          <p>He vivido entre prácticas, viajes, preguntas y cambios de opinión.</p>
          <p>India, yoga, meditación, filosofía, sonido, escritura y la experiencia cotidiana han sido maneras distintas de acercarme a una misma pregunta: <em>¿cómo quiero habitar mi vida?</em></p>
        </div>
      </section>

      <footer>
        <div>
          <span>LEYLA DE LA PEÑA</span>
          <p>A personal universe for self-discovery.</p>
        </div>
        <div className="footer-links">
          <a href="#bitacora">BITÁCORA</a>
          <a href="#halo">HALO</a>
          <a href="#experiences">EXPERIENCES</a>
          <a href="#books">BOOKS</a>
        </div>
        <p className="legal">Este espacio acompaña procesos de exploración personal y no sustituye atención médica ni psicológica.</p>
      </footer>
    </main>
  );
}
