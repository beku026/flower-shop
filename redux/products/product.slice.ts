import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { IProductV2 } from '../types/product';
import { RootState } from '../store';
import $api from '../../utils/axios';
import { ApiResponse } from '../types/apiTypes';

const initialState = {
  loading: false,
  error: null as null | string | undefined,
};

export const productAdapter = createEntityAdapter<IProductV2>();
export const productSelectors = productAdapter.getSelectors(
  (state: RootState) => state.product
);

export const fetchProducts = createAsyncThunk(
  'product/fetchproducts',
  async () => {
    const { data } = await $api.get<ApiResponse<IProductV2>>(
      '/products/products_item/'
    );
    return data.results;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState: productAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      productAdapter.setAll(state, action.payload);
      state.loading = false;
      state.error = null;
    });
  },
});

export const productReducer = productSlice.reducer;
