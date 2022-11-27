import React from 'react';
import revkuLogo from 'images/revku-logo.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.paragraph}>
        Focus Open Beta •{' '}
        <a href="./github" target="_blank" className={styles.link}>
          View GitHub
        </a>
      </p>
      <p className={styles.author}>
        Created by{' '}
        <a href="https://revku.dev/" target="_blank" rel="noreferrer">
          <img src={revkuLogo} alt="Revku logo" className={styles.logo} />
        </a>
      </p>
    </div>
  );
};

export default Footer;
