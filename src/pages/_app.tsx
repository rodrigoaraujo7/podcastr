import styles from '../styles/app.module.scss';

import Header from '../components/Header';
import Player from '../components/Player';

import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  )
}

export default MyApp
