export interface IProductCard {
  id: number;
  title: string;
  price: string;
  image: string;
}

export interface ISliderItem {
  id: number;
  image: string | StaticImageData;
}
export interface IFavoritesItem {
  id: number;
  title: string;
  price: string;
  image?: string | StaticImageData;
}

export interface ConnectInfoFormDto {
  name: string;
  tel: string;
}

export interface IAuthorBouquetsItem {
  id: number;
  title: string;
  price: string;
  image?: string | StaticImageData;
}

export interface ISidebarItem {
  id: number;
  title: string;
  link: string;
}

export interface OrderingFormDto {
  name: string;
  date: string;
  time: string;
  email: string;
  tel: string;
  comments?: string;
  deliveryType: string;
  address?: string;
  payment: string;
  receiver: string;
  privacyPolicy?: boolean;
  totalSum: null | number;
}
export interface IButtonEditItem {
  id: number;
  title: string;
}

export interface ButtonFormDto {
  oldPassword: string;
  newPassword: string;
}

export interface IReviewsItem {
  id: number;
  title: string;
  text: string;
  image?: string | StaticImageData;
  icon1?: string | StaticImageData;
  icon2?: string | StaticImageData;
  icon3?: string | StaticImageData;
  icon4?: string | StaticImageData;
  icon5?: string | StaticImageData;
}
