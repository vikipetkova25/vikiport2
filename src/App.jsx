import React, { useState, useEffect } from "react";

import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero.jsx";
import { AboutSection } from "./components/About/About.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Contact } from "./components/Contact/Contact.jsx";





function App() {
 
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme); 
  }, [theme]);

  
  const toggleTheme = () => {
    setTheme(curr => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <AboutSection />
      <Experience />
      <Projects />
      <Contact />
      

     <button
  onClick={toggleTheme}
  style={{
    position: "fixed",
    top: 30,
    left: 20,
    zIndex: 1000,
    padding: 10,
    borderRadius: "50%",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    boxShadow:
      theme === "dark"
        ? "0 0 10px 3px rgba(108, 193, 255, 0.7)"
        : "0 0 10px 3px rgba(25, 55, 109, 0.7)",
    transition: "box-shadow 0.3s ease",
  }}
  id="theme-toggle-btn"
  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
>
  <img
    src={theme === "dark" ? "/assets/button/sun2.png" : "/assets/button/moon.png"}
    alt="theme icon"
    style={{ width: 24, height: 24 }}
  />
</button>

    </div>
  );
}

export default App;
