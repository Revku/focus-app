import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';
import { store } from 'store/index';
import { Provider } from 'react-redux';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <Provider store={store}>
      <div className={styles.wrapper}>
        <div>
          <Navigation />
        </div>
        <div className={styles.main}>
          <Main />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

export default Home;
