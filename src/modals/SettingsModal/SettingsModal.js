import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import Modal from 'components/Modal/Modal';
import button from 'components/Button/Button.module.scss';
import { updateSettings } from 'store';
import styles from './SettingsModal.module.scss';

const SettingsModal = ({ status, setStatus }) => {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const [pomodoro, setPomodoro] = React.useState(settings.timers.pomodoro);
  const [shortbreak, setShortbreak] = React.useState(
    settings.timers.shortbreak
  );
  const [longbreak, setLongbreak] = React.useState(settings.timers.longbreak);

  const handleSave = () => {
    const timers = {
      pomodoro: parseInt(pomodoro),
      shortbreak: parseInt(shortbreak),
      longbreak: parseInt(longbreak),
    };

    setStatus(false);
    dispatch(updateSettings({ ...settings, timers }));
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
                min={1}
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
                min={1}
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
                min={1}
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
