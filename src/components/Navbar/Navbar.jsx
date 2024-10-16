import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        &lt;FS/&gt;
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="botao-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link to="sobre" smooth={true} duration={500} offset={-110}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="experiencia" smooth={true} duration={500} offset={-110}>
              Experiência
            </Link>
          </li>
          <li>
            <Link to="projetos" smooth={true} duration={500} offset={-110}>
              Projetos
            </Link>
          </li>
          <li>
            <Link to="contato" smooth={true} duration={500}>
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
