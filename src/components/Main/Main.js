import React from 'react';
import button from 'components/Button/Button.module.scss';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.timer}>25:00</p>
        <button type="button" className={button.normal}>
          rozpocznij
        </button>
      </div>

      <div className={styles.buttons}>
        <button type="button" className={`${button.normal} ${styles.button}`}>
          pomodoro
        </button>
        <button type="button" className={`${button.ghost} ${styles.button}`}>
          short break
        </button>
        <button type="button" className={`${button.ghost} ${styles.button}`}>
          long break
        </button>
      </div>
    </div>
  );
};

export default Main;
