import React, { useState, useEffect } from "react";
import styles from "./TypingEffect.module.css";

const TypingEffect = () => {
  const fullText = 
    "Sou desenvolvedor FullStack com 3 anos de experiência.\n" +
    "Entre em contato para saber mais!";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <p className={styles.description}>
      {displayedText.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          {i < displayedText.split('\n').length - 1 && <br />}
        </span>
      ))}
      <span className={styles.cursor}>|</span>
    </p>
  );
};

export default TypingEffect;
