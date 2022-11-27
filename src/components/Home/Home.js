import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import Main from 'components/Main/Main';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Navigation />
      </div>
      <div className={styles.main}>
        <Main />
      </div>
      <div />
    </div>
  );
};

export default Home;
