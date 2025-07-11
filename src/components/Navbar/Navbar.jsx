import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>

      <img
        className={styles.menuBtn}
        src={menuOpen ? "/assets1/nav/closeIcon.png" : "/assets1/nav/menu1.png"}
        onClick={() => setMenuOpen(!menuOpen)}
        alt="Menu button"
      />

      <div className={styles.menu}>
        <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
          <li><a href="#about" className={styles.navLink}>About</a></li>
          <li><a href="#experience" className={styles.navLink}>Experience</a></li>
          <li><a href="#projects" className={styles.navLink}>Projects</a></li>
          <li><a href="#contact" className={styles.navLink}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
