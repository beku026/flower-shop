import { GetStaticProps } from "next";
import React from "react";
import { ApiResponse } from "../../redux/types/apiTypes";
import { IProductV2 } from "../../redux/types/product";
import $api from "../../utils/axios";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SliderProductDetail from "../../components/Slider/SliderProductDetail";

type Props = {
  productData: IProductV2 | null;
  error?: any;
};

function ProductDetail(props: Props) {
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

export const getStaticProps: GetStaticProps<
  Props,
  { productId: string; error: any }
> = async (context) => {
  try {
    const { data: productData } = await $api.get<IProductV2>(
      `/products/products_item/${context?.params?.productId}`
    );
    return {
      props: {
        productData,
      },

      revalidate: 10, // In seconds
    };
  } catch (e: any) {
    return {
      props: {
        productData: null,
      },
    };
  }
};

export async function getStaticPaths() {
  const {
    data: { results },
  } = await $api.get<ApiResponse<IProductV2>>("/products/products_item/");

  const paths = results.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}

export default ProductDetail;
