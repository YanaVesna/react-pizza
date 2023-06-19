import React from "react";
import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Nichts gefunden
        <p className={styles.description}>
          Leider ist diese Seite in unserem Online-Shop nicht verfügbar.
        </p>
      </h1>
    </div>
  );
};

export default NotFoundBlock;
