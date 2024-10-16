import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projetos.json";
import { ProjectCard } from "./ProjectsCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projetos">
      <h2 className={styles.title}>Projetos</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};