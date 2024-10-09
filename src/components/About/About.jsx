import React from 'react';
import styles from "./About.module.css"

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { getImageUrl } from '../../utils';


const About = () => {
    return (
      <>
        <section className={styles.container}>
          <div className={styles.card}>
            <img
              src={getImageUrl("perfil/perfil2.png")}
              alt=""
              className={styles.heroImg}
            />
            <div className={styles.about}>
              <h2>Sobre mim</h2>
              <h1 className={styles.title}>Fabiano Souza</h1>
              <h3 className={styles.subtitle}>FullStack Developer</h3>
              <p>
                Olá, eu sou Fabiano Souza, um profissional positivo, dedicado e
                comunicativo, com anos de experiência trabalhando em equipe. <br />
                Minha jornada na tecnologia começou em 2016, quando ingressei em
                um curso de programação que durou seis meses. Desde então, fiz
                ETEC, me formei na faculdade, e me apaixonei completamente pelo
                mundo do desenvolvimento. <br /> Tenho facilidade para aprender
                rapidamente novas tecnologias, com uma especial afinidade pelo
                Desenvolvimento Full Stack, especialmente no Front End. Ao longo
                da minha carreira, sempre priorizei o trabalho em equipe e estou
                em constante busca por evolução, seja em habilidades técnicas ou
                pessoais. <br /> Gosto de contribuir com novas ideias e trazer para o
                presente as lições que aprendi no passado, sempre buscando
                melhorar o ambiente de trabalho e os projetos dos quais faço
                parte.
              </p>
              <nav className={styles.navbar}>
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/fabiano-souza-cotrim/"
                      target="_blank"
                    >
                      <LinkedInIcon
                        sx={{
                          fontSize: {
                            xs: 70,
                            sm: 30,
                            md: 30,
                            lg: 40,
                            xl: 60,
                          },
                        }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/FabianoSouzaCotrim"
                      target="_blank"
                    >
                      <GitHubIcon
                        sx={{
                          fontSize: {
                            xs: 70,
                            sm: 30,
                            md: 30,
                            lg: 40,
                            xl: 60,
                          },
                        }}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.99freelas.com.br/fabianosouza"
                      target="_blank"
                    >
                      <img src={getImageUrl("sobre/99free.svg")} alt="" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </>
    );
}

export default About;