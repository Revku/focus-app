import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';
import { store } from 'store/index';
import { Provider } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import brain from 'assets/brain.svg';
import styles from './Home.module.scss';

const Home = () => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('load', () => {
      setLoaded(true);
    });
  }, []);

  return (
    <Provider store={store}>
      {loaded ? (
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
      ) : (
        <div className={styles.loader}>
          <img src={brain} alt="Focus Logo" />
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#999"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
    </Provider>
  );
};

export default Home;
