import React from "react";
import styles from "./Contact.module.css";



export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:victoriapetkova26@itpg-varna.bg">victoriapetkova26@itpg-varna.bg</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/linkedinIcon.png" alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/myname">linkedin.com/vikee</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://www.github.com/vikipetkova25">github.com/vikipetkova25</a>
        </li>
      </ul>
    </footer>
  );
};
