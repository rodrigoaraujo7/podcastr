import styles from '../styles/app.module.scss';

import Header from '../components/Header';
import Player from '../components/Player';
import { PlayerContext } from '../contexts/PlayerContext';'

import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContext.Provider value={'Rodrigo'}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp
