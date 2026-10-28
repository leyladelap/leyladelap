import Image from "next/image";
import MeditationSignupForm from "@/components/MeditationSignupForm";
import styles from "./page.module.css";

export const metadata = {
  title: "Meditación de los domingos | Leyla de la Peña",
  description: "Regístrate a la meditación guiada de los domingos con Leyla de la Peña."
};

export default function MeditationPage() {
  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <div className={styles.brandRow}>
          <a href="/" aria-label="Volver a Leyla de la Peña">
            <Image
              src="/logo-primary.png"
              width={190}
              height={115}
              alt="Leyla de la Peña"
              priority
              className={styles.logo}
            />
          </a>
          <span>DOMINGOS · MEDITACIÓN GUIADA</span>
        </div>

        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className={styles.kicker}>UN ESPACIO PARA VOLVER A TI</p>
            <h1>Meditación de los domingos.</h1>
            <p className={styles.lead}>
              Un encuentro para bajar el ruido, volver al cuerpo y escucharte con un poco más de espacio.
            </p>
            <p className={styles.detail}>
              Regístrate aquí para recibir la información de la práctica. Quiero conocerte un poco antes de encontrarnos, por eso te dejo dos preguntas abiertas.
            </p>

            <div className={styles.note}>
              <span>20 MIN · ONLINE</span>
              <p>No necesitas experiencia previa. Solo un lugar tranquilo y disposición para estar contigo.</p>
            </div>
          </div>

          <div className={styles.formCard}>
            <p className={styles.formKicker}>REGISTRO</p>
            <h2>Reserva tu lugar.</h2>
            <MeditationSignupForm />
          </div>
        </div>
      </section>
    </main>
  );
}
