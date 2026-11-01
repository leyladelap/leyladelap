import MasterSymbol from "@/components/MasterSymbol";
import styles from "./HomeEditorialHero.module.css";

const drive = (id: string) => `https://lh3.googleusercontent.com/d/${id}=w1400`;

const topPhotos = [
  drive("1yU6vRGjK1C52-GMNir4OYJTR4nv_Q4El"),
  drive("1lKk1oWsQ6EdKf_z9ux3sVgxyzAYyq_k_"),
  drive("1V_axM1QHO3Al50qqC_4laRoTscsUQRpc"),
  drive("1IGMfnMtDPkK9_-G-gnmCE4TzKNTaEFKN"),
  drive("194bQwHMML3NOEntOJvTkbpo_nX2WUWOu"),
  drive("1Je2XIIpV8qhS024kLWggf0kV4tLJaig4"),
];

const bottomPhotos = [
  drive("12B5mmdVQwV23WeMjFtB1kI_rK2cKhKtX"),
  drive("1GgMpjfkNGxcKcc3Xk7NG7SdJRZftjRkJ"),
  drive("1ISMdA2i8GgMDSEroHX_-FE1Rl_HOWEij"),
  drive("1V3OdDzy4Sze2lI47UyMaCDedFAEzp1-s"),
  drive("1ttfzQFtF_Wq2M86k0i1z3S23CFZ6uw1c"),
  drive("1H6sgyzU-oDW7OQj42uhdv50it_HxEpxa"),
];

const leftPhotos = [
  drive("1kagzCjTgd2CYlyZYK4Ckst_PS0v6uenX"),
  drive("15kW3PvuSrvkzbhIcZIh-YD_MqFvbSw6P"),
  drive("1MsG4hh1en1NHamDKMf7wxHFmgRntJQMl"),
];

const rightPhotos = [
  drive("1Kq42YCTNRRfBsmSiJla2qV181wLtsoRU"),
  drive("19ElNY4SCGaKM1ZqsOeKHcjdaqqLrW-Se"),
  drive("1lJMu9EC2P-RrgCac3a1zVzkueYmquqQ6"),
];

function Photo({ src }: { src: string }) {
  return (
    <div className={styles.photo}>
      <img src={src} alt="" className={styles.image} loading="eager" />
    </div>
  );
}

export default function HomeEditorialHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.frame} aria-hidden="true">
        <div className={styles.topRail}>{topPhotos.map((src) => <Photo key={src} src={src} />)}</div>
        <div className={styles.leftRail}>{leftPhotos.map((src) => <Photo key={src} src={src} />)}</div>
        <div className={styles.rightRail}>{rightPhotos.map((src) => <Photo key={src} src={src} />)}</div>
        <div className={styles.bottomRail}>{bottomPhotos.map((src) => <Photo key={src} src={src} />)}</div>
      </div>

      <div className={styles.content}>
        <p className={styles.kicker} id="home-hero-title">A PERSONAL UNIVERSE FOR SELF-DISCOVERY</p>
        <MasterSymbol className={styles.symbol} />
        <div className={styles.actions}>
          <a href="#experiences">Explorar experiencias</a>
          <a href="/meditacion">Meditación de los domingos</a>
        </div>
      </div>
    </section>
  );
}
