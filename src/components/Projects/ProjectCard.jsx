import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: { title, imageSrc, description } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt={`Image of ${title}`} className={styles.image} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
