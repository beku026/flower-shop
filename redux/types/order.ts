export interface OrderState {
  loading: boolean;
  error: string | null | undefined;
  ids: number[];
  entities: {};
}

export interface IOrderV {
  address?: string | null;
  last_name?: string;
  first_name?: string;
  email: string;
  phone_number?: string;
  comment?: string | undefined;
  payment_type?: string;
  totalSum?: number;
  time: string;
  comments: string | null;
  date: string;
  deliveryType: string;
  name: string;
  payment: string;
  privacyPolicy: boolean;
  receiver: string;
  tel: string;
}
