import React from 'react';

import logo from 'images/focus-logo.svg';
import themesIcon from 'images/icons/themes-icon.svg';
import settingsIcon from 'images/icons/settings-icon.svg';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <a href="./">
        <img src={logo} alt="Focus Logo" className={styles.logo} />
      </a>

      <div>
        <img src={themesIcon} alt="Themes" className={styles.icon} />
        <img src={settingsIcon} alt="Settings" className={styles.icon} />
      </div>
    </div>
  );
};

export default Navigation;
