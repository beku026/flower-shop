import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/bootstrap.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { ToastContainer, Zoom } from 'react-toastify';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { persistStore } from 'redux-persist';

function MyApp({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store);
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Flower-Shop</title>
      </Head>
      <Provider store={store}>
        <ToastContainer draggable={false} autoClose={8000} transition={Zoom} />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
