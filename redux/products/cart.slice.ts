import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit'
import { RootState } from '../store'
import $api from '../../utils/axios'
import { CartState, ICartItem } from '../types/cart'
import { ApiResponse } from '../types/apiTypes'
import { IProductV2 } from '../types/product'

const initialState: CartState = {
  loading: false,
  error: null,
  ids: [],
  entities: {},
}

export const cartAdapter = createEntityAdapter<ICartItem>()
export const cartSelectors = cartAdapter.getSelectors(
  (state: RootState) => state.cart
)

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async () => {
    try {
      const { data } = await $api.get<ApiResponse<ICartItem>>(`/carts/cart/`)
      return data
    } catch (error: any) {
      return error.message
    }
  }
)

export const removeCartItem = createAsyncThunk(
  'cart/removeCartItem',
  async (id: number) => {
    try {
      await $api.delete<ICartItem>(`/carts/cartitem/${id}/`)
      return id
    } catch (error: any) {
      return error.message
    }
  }
)
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({product, amount,}: {
    product: number
    amount: number
  }): Promise<ICartItem> => {
    console.log(product, amount)
    const { data: cartItem } = await $api.post<
      Omit<ICartItem, 'product'> & { product: number }
    >(`/carts/cartitem/create/`, {
      product,
      amount,
    })
    const { data: productItem } = await $api.get<IProductV2>(
      `/products/products_item/${product}`
    )
    return { ...cartItem, product: productItem }
  }
)

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartAdapter.getInitialState(initialState),
  reducers: {
    changeCartItemAmount: (state, { payload: { id, amount } }) => {
      cartAdapter.updateOne(state, {
        id,
        changes: { amount },
      })
    },
  },
  extraReducers: (builder) => {
    // Fetch
    builder.addCase(fetchCartItems.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchCartItems.rejected, (state, action) => {
      state.error = action.error.message
      state.loading = false
    })
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      cartAdapter.setAll(state, action.payload.cart_items)
      state.loading = false
    })
    // Remover
    builder.addCase(removeCartItem.fulfilled, (state, action) => {
      cartAdapter.removeOne(state, action.payload)
      state.loading = false
    })

    // Create
    builder.addCase(addToCart.pending, (state) => {
      state.loading = true
    })
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.loading = false

      cartAdapter.addOne(state, action.payload)
    })
    builder.addCase(addToCart.rejected, (state, action) => {
      state.error = action.error.message
      state.loading = false
    })
  },
})
export const { changeCartItemAmount } = cartSlice.actions
export const cartReducer = cartSlice.reducer
