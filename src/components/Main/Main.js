import React from 'react';
import button from 'components/Button/Button.module.scss';
import { useSelector } from 'react-redux';
import NotificationSound from 'assets/notification.wav';

import styles from './Main.module.scss';

const Main = () => {
  const settings = useSelector((state) => state.settings);
  const [audio] = React.useState(new Audio(NotificationSound));

  const modes = {
    pomodoro: { id: 'pomodoro', duration: settings.timers.pomodoro },
    shortbreak: { id: 'short break', duration: settings.timers.shortbreak },
    longbreak: { id: 'long break', duration: settings.timers.longbreak },
  };

  const [active, setActive] = React.useState(modes.pomodoro);
  const [timer, setTimer] = React.useState('00:00');
  const [isActive, setIsActive] = React.useState(false);
  const [secondsLeft, setSecondsLeft] = React.useState(
    modes.pomodoro.duration * 60
  );
  const [buttonText, setButtonText] = React.useState('start');

  const formatTimeLeft = (seconds) => {
    return `${Math.floor(seconds / 60)}:${
      seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`
    }`;
  };

  React.useEffect(() => {
    setActive(modes.pomodoro);
  }, [settings]);

  React.useEffect(() => {
    switch (active.id) {
      case modes.pomodoro.id:
        setSecondsLeft(modes.pomodoro.duration * 60);
        break;
      case modes.shortbreak.id:
        setSecondsLeft(modes.shortbreak.duration * 60);
        break;
      case modes.longbreak.id:
        setSecondsLeft(modes.longbreak.duration * 60);
        break;
      default:
        setSecondsLeft(modes.pomodoro.duration * 60);
        break;
    }

    document.title = `Focus - just get it done!`;
    setIsActive(false);
  }, [active, secondsLeft === 0]);

  React.useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
        document.title = `${formatTimeLeft(secondsLeft - 1)} • Focus Mode (${
          active.id
        })`;
      }, 1000);
      setButtonText('pause');

      if (secondsLeft === 0) {
        clearInterval(interval);
        setIsActive(false);
        audio.play();
        setButtonText('start');
      }

      return () => clearInterval(interval);
    }

    if (isActive === false) {
      setButtonText('start');
    }
  }, [isActive, secondsLeft]);

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
          className={`${
            active.id === modes.pomodoro.id ? button.normal : button.ghost
          } ${styles.button}`}
          onClick={() => setActive(modes.pomodoro)}
        >
          pomodoro
        </button>
        <button
          type="button"
          className={`${
            active.id === modes.shortbreak.id ? button.normal : button.ghost
          } ${styles.button}`}
          onClick={() => setActive(modes.shortbreak)}
        >
          short break
        </button>
        <button
          type="button"
          className={`${
            active.id === modes.longbreak.id ? button.normal : button.ghost
          } ${styles.button}`}
          onClick={() => setActive(modes.longbreak)}
        >
          long break
        </button>
      </div>
    </div>
  );
};

export default Main;
