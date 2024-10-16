import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Contact = () => {
  return (
    <footer id="contato" className={styles.container}>
      <div className={styles.containerContact}>
      <div className={styles.text}>
        <h2>Contato</h2>
        <p>Sinta-se à vontade para entrar em contato!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <EmailIcon
                        sx={{
                          color: "#00d2df",
                          fontSize: {
                            xs: 30,
                            sm: 30,
                            md: 30,
                            lg: 30,
                            xl: 30,
                          },
                        }}
                      />
          <a href="mailto:fabiano.cotrim1999@gmail.com" target="_blank">fabiano.cotrim1999@gmail.com</a>
        </li>
        <li className={styles.link}>
        <LinkedInIcon
                        sx={{
                          color: "#00d2df",
                          fontSize: {
                            xs: 30,
                            sm: 30,
                            md: 30,
                            lg: 30,
                            xl: 30,
                          },
                        }}
                      />
          <a href="https://www.linkedin.com/in/fabiano-souza-cotrim" target="_blank">linkedin.com/in/fabiano-souza-cotrim</a>
        </li>
        <li className={styles.link}>
        <GitHubIcon
                        sx={{
                          color: "#00d2df",
                          fontSize: {
                            xs: 30,
                            sm: 30,
                            md: 30,
                            lg: 30,
                            xl: 30,
                          },
                        }}
                      />
          <a href="https://github.com/FabianoSouzaCotrim" target="_blank">github.com/FabianoSouzaCotrim</a>
        </li>
      </ul>
      </div>
      <p className={styles.copy}>&copy; 2024 Fabiano. Todos os direitos reservados.</p>
    </footer>
  );
};