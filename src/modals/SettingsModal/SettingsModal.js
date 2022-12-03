import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import Modal from 'components/Modal/Modal';
import saveSettings from 'hooks/saveSettings';
import button from 'components/Button/Button.module.scss';
import useSettings from 'hooks/useSettings';
import styles from './SettingsModal.module.scss';

const SettingsModal = ({ status, setStatus }) => {
  const settings = useSettings();

  const [pomodoro, setPomodoro] = React.useState(settings.timers.pomodoro);
  const [shortbreak, setShortbreak] = React.useState(
    settings.timers.shortbreak
  );
  const [longbreak, setLongbreak] = React.useState(settings.timers.longbreak);

  const handleSave = () => {
    settings.timers = {
      pomodoro: parseInt(pomodoro),
      shortbreak: parseInt(shortbreak),
      longbreak: parseInt(longbreak),
    };

    saveSettings(settings);
    setStatus(false);
    // Temponary resolution
    location.reload();
  };

  return (
    <AnimatePresence
      initial={false}
      exitBeforeEnter={true}
      onExitComplete={() => null}
    >
      {status && (
        <Modal setStatus={setStatus} title="Settings">
          <div className={styles.timers}>
            <div>
              <label className={styles.label} htmlFor="pomodoro">
                Pomodoro
              </label>
              <input
                className={styles.input}
                type="number"
                id="pomodoro"
                placeholder="25"
                value={pomodoro}
                onChange={(event) => setPomodoro(event.target.value)}
              />
              <p className={styles.suffix}>minutes</p>
            </div>

            <div>
              <label className={styles.label} htmlFor="shortbreak">
                Short Break
              </label>
              <input
                className={styles.input}
                type="number"
                id="shortbreak"
                placeholder="5"
                value={shortbreak}
                onChange={(event) => setShortbreak(event.target.value)}
              />
              <p className={styles.suffix}>minutes</p>
            </div>

            <div>
              <label className={styles.label} htmlFor="longbreak">
                Long Break
              </label>
              <input
                className={styles.input}
                type="number"
                id="longbreak"
                placeholder="15"
                value={longbreak}
                onChange={(event) => setLongbreak(event.target.value)}
              />
              <p className={styles.suffix}>minutes</p>
            </div>
          </div>
          <div className={styles.footer}>
            <button onClick={handleSave} type="button" className={button.ghost}>
              Save settings
            </button>
          </div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

SettingsModal.propTypes = {
  status: PropTypes.bool.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default SettingsModal;
