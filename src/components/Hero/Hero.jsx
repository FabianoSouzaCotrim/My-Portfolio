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
        <a
          href="mailto:fabiano.cotrim1999@gmail.com"
          className={styles.contactBtn}
        >
          Contato
        </a>
      </div>
      <img
        src={getImageUrl("perfil/perfil.png")}
        alt="foto de perfil"
        className={styles.heroImg}
      />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
