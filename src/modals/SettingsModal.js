import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import Modal from 'components/Modal/Modal';

const SettingsModal = ({ status, setStatus }) => {
  return (
    <AnimatePresence
      initial={false}
      exitBeforeEnter={true}
      onExitComplete={() => null}
    >
      {status && (
        <Modal setStatus={setStatus} title="Settings">
          <div />
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
