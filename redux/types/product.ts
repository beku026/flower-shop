export type IProduct = {
  id: number;
  title: string;
  price: number;
  productImage: string;
};

export interface IProductArticle {
  id: number;
  article: string;
  product_items: IProductV2[];
}

export interface IProductV2 {
  id: number;
  title: string;
  size: string;
  category: number;
  product: number;
  description: string;
  price: number;
  equipment: string;
  is_new: boolean;
  bouquet_care: string;
  specifications: string;
  discount: number;
  product_image: [
    {
      id: number;
      image: string;
      product_id: number;
    }
  ];
}

export interface ISliderProductV2 {
  id: number;
  index: number;
  title: string;
  description: string;
  product_image: ICompaniesSlider[];
}
export interface ICompaniesSlider {
  id: number;
  image: string;
}

export interface IProductImage {
  id: number;
  image: string;
  product_id: number;
}

export interface FavoritesState {
  loading: boolean;
  error: string | null | undefined;
  id: [];
  entities: {};
}
export interface IFavoritesV {
  id: number;
  title: string;
  size: string | null;
  category: number;
  product: number;
  description: string;
  price: number;
  equipment: string;
  is_new: boolean;
  bouquet_care: string;
  specifications: string;
  discount: number;
  quantity: number;
  product_image: [
    {
      id: number;
      image: string;
      product_id: number;
    }
  ];
}

export interface ICategoriesV2 {
  id: number;
  title: string;
  description: string;
  image: string;
}
export interface CartItem extends IProduct {
  count: number;
}
