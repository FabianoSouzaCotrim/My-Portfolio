import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import TypingEffect from "./TypingEffect";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Fabiano Souza</h1>
        <TypingEffect />
        <div className={styles.btnContainer}>
          <a
            href="https://www.linkedin.com/in/fabiano-souza-cotrim/"
            className={styles.contactBtn}
            target="_blank"
          >
            Contato
          </a>

          <Link to="projetos" smooth={true} duration={500} className={styles.contactBtn}>
            Projetos
          </Link>
        </div>
      </div>
      <img
        src={getImageUrl("perfil/perfil.png")}
        alt="foto de perfil"
        className={styles.heroImg}
      />
      <div className={styles.bottomBlur} />
      <Link className={styles.roll} to="sobre" smooth={true} duration={500} offset={-110}>
        <p> deslize para baixo </p>
        <img src={getImageUrl("roll/scroll.png")} alt="" />
      </Link>
    </section>
  );
};

export default Hero;
