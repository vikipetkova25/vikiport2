import React from "react";
import styles from "./About.module.css";

export const AboutSection = () => {
  return (
   <section id="about" className={styles.container}>

      <h2 className={styles.title}> About Me</h2>

      <div className={styles.content}>

    <img
          src="/assets/about/vikiplant.png"
          alt="Viki sitting"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src="/assets/about/cursorIcon.png"
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>3D Modeling</h3>
              <p>I love creating 3D models because it lets me bring ideas to life in a unique and creative way.
</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img
              src="/assets/about/serverIcon (1).png"
              alt="server icon "
         
            />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Enthusiast</h3>
              <p>I enjoy crafting clean, user-friendly designs with attention to detail.</p>
            </div>
          </li>

            <li className={styles.aboutItem}>
            <img
              src="/assets/about/uiIcon (1).png"
              alt="UI icon"
             
            />
          <div className={styles.aboutItemText}>
              <h3>Backend Basics</h3>
              <p>I have beginner experience working with databases.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
