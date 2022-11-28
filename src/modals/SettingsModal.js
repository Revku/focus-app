import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

const SettingsModal = ({ status, setStatus }) => {
  return (
    <div>
      {status && (
        <Modal setStatus={setStatus} title="Settings">
          <div />
        </Modal>
      )}
    </div>
  );
};

SettingsModal.propTypes = {
  status: PropTypes.bool.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default SettingsModal;
