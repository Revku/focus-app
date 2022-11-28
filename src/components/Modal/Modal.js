import React from 'react';
import PropTypes from 'prop-types';
import closeIcon from 'images/icons/close-icon.svg';
import styles from './Modal.module.scss';

const Modal = ({ children, title, setStatus }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <img
            className={styles.close}
            src={closeIcon}
            alt="Close Icon"
            onClick={() => setStatus(false)}
          />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default Modal;
