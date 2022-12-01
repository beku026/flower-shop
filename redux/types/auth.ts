export type IAuth = {
  loading: boolean;
  error: null | string;
  email: null | string;
};
export interface AuthState {
  isAuthenticated: boolean | null;
  loading: boolean;
  signup: boolean;
  error: string | null;
  username: string | null;
  tel: string | null | number;
  mail: string | null;
  ids: number[];
  entities: {};
}

export interface IAuthArticle {
  id: number;
  article: string;
  product_items: IAuthV[];
}

export interface IAuthV {
  id: number;
  email: string;
}

export interface CartItem extends IAuth {
  count: number;
  next: null;
  previous: string;
  results: number[] | string[];
}

export interface SignInUserDto {
  email: string;
  password: string;
}

export interface SignUpUserDto {
  email: string;
  password: string;
}
export interface SignUpUserConfirmationSmsDto {
  uid: string;
  token: string;
}

export interface ResendActivationDto {
  email: string;
}

export interface SetPasswordDto {
  current_password: string;
  new_password: string;
}
