import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import Modal from 'components/Modal/Modal';
import button from 'components/Button/Button.module.scss';
import styles from './SettingsModal.module.scss';

const SettingsModal = ({ status, setStatus }) => {
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
              />
              <p className={styles.suffix}>minutes</p>
            </div>
          </div>
          <div className={styles.footer}>
            <button type="button" className={button.ghost}>
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
