import React from 'react';
import ReactTooltip from 'react-tooltip';

import logo from 'images/focusbeta-logo.svg';
import themesIcon from 'images/icons/themes-icon.svg';
import settingsIcon from 'images/icons/settings-icon.svg';

import SettingsModal from 'modals/SettingsModal/SettingsModal';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [settingsStatus, setSettingsStatus] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <a href="./">
        <img src={logo} alt="Focus Logo" className={styles.logo} />
      </a>

      <div>
        <img
          src={themesIcon}
          alt="Themes"
          className={`${styles.icon} ${styles.themeIcon}`}
          data-tip="Themes are not available in this version"
        />
        <ReactTooltip place="left" type="error" effect="solid" />
        <img
          src={settingsIcon}
          alt="Settings"
          className={styles.icon}
          onClick={() => setSettingsStatus(true)}
        />

        <SettingsModal status={settingsStatus} setStatus={setSettingsStatus} />
      </div>
    </div>
  );
};

export default Navigation;
