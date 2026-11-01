import MasterSymbol from "@/components/MasterSymbol";
import styles from "./HomeEditorialHero.module.css";

const drive = (id: string) => `https://lh3.googleusercontent.com/d/${id}=w1400`;

const photos = [
  { src: drive("1yU6vRGjK1C52-GMNir4OYJTR4nv_Q4El"), className: styles.butterfly },
  { src: drive("15kW3PvuSrvkzbhIcZIh-YD_MqFvbSw6P"), className: styles.turtles },
  { src: drive("1lKk1oWsQ6EdKf_z9ux3sVgxyzAYyq_k_"), className: styles.book },
  { src: drive("1V_axM1QHO3Al50qqC_4laRoTscsUQRpc"), className: styles.tree },
  { src: drive("194bQwHMML3NOEntOJvTkbpo_nX2WUWOu"), className: styles.sunset },
  { src: drive("1IGMfnMtDPkK9_-G-gnmCE4TzKNTaEFKN"), className: styles.lotusWoman },
  { src: drive("1Kq42YCTNRRfBsmSiJla2qV181wLtsoRU"), className: styles.lily },
  { src: drive("1lJMu9EC2P-RrgCac3a1zVzkueYmquqQ6"), className: styles.buddhaLotus },
  { src: drive("1H6sgyzU-oDW7OQj42uhdv50it_HxEpxa"), className: styles.vintageWoman },
  { src: drive("1ISMdA2i8GgMDSEroHX_-FE1Rl_HOWEij"), className: styles.waterLily },
  { src: drive("1-0YRO_FHyX1LbJyh-IiDx1I4uPS4GG7U"), className: styles.body },
  { src: drive("1V3OdDzy4Sze2lI47UyMaCDedFAEzp1-s"), className: styles.yogaDance },
  { src: drive("12B5mmdVQwV23WeMjFtB1kI_rK2cKhKtX"), className: styles.turtle },
];

export default function HomeEditorialHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.frame} aria-hidden="true">
        {photos.map((photo) => (
          <div className={`${styles.photo} ${photo.className}`} key={photo.src}>
            <img src={photo.src} alt="" className={styles.image} loading="eager" />
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <p className={styles.kicker}>A PERSONAL UNIVERSE FOR SELF-DISCOVERY</p>
        <MasterSymbol className={styles.symbol} />
        <h1 className={styles.name}>Leyla de la Peña</h1>
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
