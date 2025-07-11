import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Viki</h1>
        <p className={styles.description}>
          I'm a beginner developer 👩‍💻
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=victoriapetkova26@itpg-varna.bg
" className={styles.contactBtn}>
          Contact me
        </a>
      </div>

      <img
        src="/assets/hero/viki.png"
        alt="Viki"
        className={styles.heroImg}
      />

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
