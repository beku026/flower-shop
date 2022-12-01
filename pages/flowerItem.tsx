import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SliderProductDetail from '../components/Slider/SliderProductDetail';
import { IProductV2 } from '../redux/types/product';

type Props = {
  productData: IProductV2 | null;
  error?: any;
};

function flowerItem(props: Props) {
  return (
    <div>
      <Header />
      {!!props?.productData && (
        <SliderProductDetail productData={props?.productData} />
      )}
      <Footer />
    </div>
  );
}

export default flowerItem;
