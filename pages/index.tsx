import type { NextPage } from 'next';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import Popular from '../components/Popular/Popular';
import Footer from '../components/Footer/Footer';
import Reviews from '../components/Reviews/Reviews';
import Subscription from '../components/Subscription/Subscription';
import NewItems from '../components/NewItems/NewItems';
import Bouquets from '../components/textBouquets/Bouquets';

import { useAppDispatch } from '../redux/hooks';
import React, { useEffect } from 'react';
import { fetchProducts } from '../redux/products/product.slice';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Hero />
      <Popular />
      <Reviews />
      <NewItems />
      <Subscription />
      <Bouquets />
      <Footer />
    </div>
  );
};

export default Home;
