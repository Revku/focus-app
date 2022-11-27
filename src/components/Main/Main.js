import React from 'react';
import button from 'components/Button/Button.module.scss';
import styles from './Main.module.scss';

const Main = () => {
  const modes = {
    pomodoro: 25,
    shortbreak: 5,
    longbreak: 20,
  };

  const [active, setActive] = React.useState('pomodoro');
  const [timer, setTimer] = React.useState('00:00');
  const [isActive, setIsActive] = React.useState(false);
  const [secondsLeft, setSecondsLeft] = React.useState(modes.pomodoro * 60);
  const [buttonText, setButtonText] = React.useState('start');

  const formatTimeLeft = (seconds) => {
    return `${Math.floor(seconds / 60)}:${
      seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`
    }`;
  };

  React.useEffect(() => {
    switch (active) {
      case 'pomodoro':
        setSecondsLeft(modes.pomodoro * 60);
        break;
      case 'shortbreak':
        setSecondsLeft(modes.shortbreak * 60);
        break;
      case 'longbreak':
        setSecondsLeft(modes.longbreak * 60);
        break;
      default:
        setSecondsLeft(modes.pomodoro * 60);
        break;
    }

    setIsActive(false);
  }, [active]);

  React.useEffect(() => {
    if (isActive) {
      const interval = setInterval(
        () => setSecondsLeft((secondsLeft) => secondsLeft - 1),
        1000
      );
      setButtonText('stop');

      if (secondsLeft === 0) {
        clearInterval(interval);
        setIsActive(false);
        setButtonText('start');
      }

      return () => clearInterval(interval);
    }

    if (isActive === false) {
      setButtonText('start');
    }
  }, [isActive]);

  React.useEffect(() => {
    setTimer(formatTimeLeft(secondsLeft));
  }, [secondsLeft]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.timer}>{timer}</p>
        <button
          type="button"
          className={`${styles.actionButton} ${
            isActive ? button.ghost : button.normal
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          {buttonText}
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
