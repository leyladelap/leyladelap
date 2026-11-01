import MasterSymbol from "@/components/MasterSymbol";
import styles from "./HomeEditorialHero.module.css";

export default function HomeEditorialHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.frame} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.kicker}>A PERSONAL UNIVERSE FOR SELF-DISCOVERY</p>
        <MasterSymbol className={styles.symbol} />
        <p className={styles.tagline} id="home-hero-title">
          encontrar nuestro ser más libre y auténtico
        </p>
        <div className={styles.actions}>
          <a href="#experiences">Explorar experiencias</a>
          <a href="/meditacion">Meditación de los domingos</a>
        </div>
      </div>
    </section>
  );
}
