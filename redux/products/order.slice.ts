import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import $api from '../../utils/axios';
import { ApiResponse } from '../types/apiTypes';
import { IOrderV, OrderState } from '../types/order';

const initialState: OrderState = {
  loading: false,
  error: null,
  ids: [],
  entities: {},
};

export const postOrderItem = createAsyncThunk(
  'order/postOrderItem',
  async ({
    address,
    last_name,
    first_name,
    email,
    phone_number,
    comment,
    payment_type,
  }: IOrderV) => {
    try {
      await $api.post<ApiResponse<IOrderV>>(`/order/`, {
        address,
        last_name,
        first_name,
        email,
        phone_number,
        comment,
        payment_type,
      });
    } catch (e: any) {
      console.error(e);
      return e.message;
    }
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(postOrderItem.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(postOrderItem.fulfilled, (state: any) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(postOrderItem.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const orderReducer = orderSlice.reducer;
