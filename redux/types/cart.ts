import { IProductV2 } from './product'

export type ICart = {
  id: number
  title: string
  price: number
  image: string
}
export interface CartState {
  loading: boolean
  error: string | null | undefined
  ids: number[]
  entities: {}
}

export interface ICartArticle {
  id: number
  article: string
  product_items: ICartV[]
}

export interface ICartV {
  id: number
  title: string
  size: string
  category: number
  product: number
  description: string
  equipment: string
  is_new: boolean
  bouquet_care: string
  specifications: string
  discount: number
  price: string
  product_image: []
  total_sum: number
  amount: number
}
export interface ICartItemProduct {
  id: number
  title: string
  size: string
  amount: number
  total_sum: number
  product: IProductV2
  description: string
  equipment: string
  is_new: boolean
  bouquet_care: string
  specifications: string
  discount: number
  price: string
  product_image: []
}
export interface ICartItem {
  id: number
  amount: number
  total_sum: number
  product: IProductV2
}

export interface IAddCart {
  id: number
  product: {
    id: number
    title: string
    size: string
    category: number
    product: number
    description: string
    price: string
    equipment: string
    is_new: boolean
    bouquet_care: string
    specifications: string
    discount: number
    product_image: [
      {
        id: number
        image: string
        product_id: number
      }
    ]
  }
  amount: number
  total_sum: number
}

export interface CartItem extends ICart {
  count: number
  product: ICartV
}
