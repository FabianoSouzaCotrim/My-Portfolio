import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import TypingEffect from "./TypingEffect";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Fabiano Souza</h1>
        <TypingEffect/>
        <div>
        <a
          href="https://www.linkedin.com/in/fabiano-souza-cotrim/"
          className={styles.contactBtn}
          target="_blank"
        >
          Contato
        </a>

        <a
          href="https://www.linkedin.com/in/fabiano-souza-cotrim/"
          className={styles.contactBtn}
          target="_blank"
        >
          Projetos
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("perfil/perfil.png")}
        alt="foto de perfil"
        className={styles.heroImg}
      />
      <div className={styles.bottomBlur} />
      <a className={styles.roll} href="#about"> 
      <p> deslize para baixo </p>
      <img src={getImageUrl("roll/scroll.png")} alt="" />
      </a>
    </section>
  );
};

export default Hero;
