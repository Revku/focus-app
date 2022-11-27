import React from 'react';
import button from 'components/Button/Button.module.scss';
import styles from './Main.module.scss';

const Main = () => {
  const [active, setActive] = React.useState('pomodoro');
  const [timer, setTimer] = React.useState('0:00');

  React.useEffect(() => {
    switch (active) {
      case 'pomodoro':
        setTimer('25:00');
        break;
      case 'shortbreak':
        setTimer('05:00');
        break;
      case 'longbreak':
        setTimer('20:00');
        break;
      default:
        setTimer('25:00');
        break;
    }
  }, [active]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.timer}>{timer}</p>
        <button type="button" className={button.normal}>
          rozpocznij
        </button>
      </div>

      <div className={styles.buttons}>
        <button
          type="button"
          className={`${active === 'pomodoro' ? button.normal : button.ghost} ${
            styles.button
          }`}
          onClick={() => setActive('pomodoro')}
        >
          pomodoro
        </button>
        <button
          type="button"
          className={`${
            active === 'shortbreak' ? button.normal : button.ghost
          } ${styles.button}`}
          onClick={() => setActive('shortbreak')}
        >
          short break
        </button>
        <button
          type="button"
          className={`${
            active === 'longbreak' ? button.normal : button.ghost
          } ${styles.button}`}
          onClick={() => setActive('longbreak')}
        >
          long break
        </button>
      </div>
    </div>
  );
};

export default Main;
