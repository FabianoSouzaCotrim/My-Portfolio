import React from "react";
import style from "./Experience.module.css";
import skills from "../../data/skills.json";
import historico from "../../data/historico.json";
import { getImageUrl } from "../../utils";

const Experience = () => {
  return (
    <section className={style.container} id="experiencia">
      <h2 className={style.title}>Experiência</h2>
      <div className={style.content}>
        <div className={style.skills}>
          {skills.map((skillItem, id) => (
            <div key={id}  className={style.skill}>
              <div className={style.skillImageContainer}>
                <img
                  src={getImageUrl(skillItem.imageSrc)}
                  alt={skillItem.title}
                />
              </div>
              <p>{skillItem.title}</p>
            </div>
          ))}
        </div>
        <ul>
          {historico.map((historicoItem, id) => (
            <li key={id} className={style.historyItem}>
              <img
                src={getImageUrl(historicoItem.imageSrc)}
                alt={`${historicoItem.organisation} logo`}
              />
              <div className={style.historyItemDescription}>
                <h3>{`${historicoItem.role}, ${historicoItem.organisation}`}</h3>
                <p>{`${historicoItem.startDate} - ${historicoItem.endDate}`}</p>
                <ul>
                  {historicoItem.experiences.map((experienceItem, id) => (
                    <li key={id}>{experienceItem}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
