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
            <img src={getImageUrl("perfil/perfil.png")} alt="" className={styles.heroImg} />
            <div className={styles.about}>
              <h2>Sobre mim</h2>
              <h1 className={styles.title}>Fabiano Souza</h1>
              <h3 className={styles.subtitle}>FullStack Developer</h3>
              <p>
                Sou um profissional positivo, dedicado e comunicativo, com anos
                de experiência trabalhando em equipe. Acredito que, em uma
                empresa, é essencial ter uma boa comunicação, respeito e
                competência na realização das tarefas. <br /> Tenho facilidade para
                aprender rapidamente qualquer tecnologia, com especial destaque
                no Desenvolvimento Full Stack, particularmente no Front End. <br />Ao
                longo da minha carreira, construí um sólido histórico de
                trabalho em equipe e estou sempre em busca de evolução. <br /> Gosto de
                contribuir com novas ideias e aplicar lições aprendidas em
                experiências anteriores para melhorar continuamente o ambiente
                de trabalho e os projetos em que estou envolvido.
              </p>
              <nav className={styles.navbar}>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/fabiano-souza-cotrim/">
                      <LinkedInIcon sx={{
        fontSize: {
          xs: 70,  // 30px em telas pequenas (mobile)
          sm: 30,  // 40px em telas pequenas (tablet)
          md: 30,  // 50px em telas médias (desktop)
          lg: 40,  // 60px em telas grandes
          xl: 60,  // 70px em telas muito grandes
        },
      }}/>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/FabianoSouzaCotrim">
                      <GitHubIcon sx={{
        fontSize: {
          xs: 70,  // 30px em telas pequenas (mobile)
          sm: 30,  // 40px em telas pequenas (tablet)
          md: 30,  // 50px em telas médias (desktop)
          lg: 40,  // 60px em telas grandes
          xl: 60,  // 70px em telas muito grandes
        },
      }}/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.99freelas.com.br/fabianosouza">
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