import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { RootState } from '../store';
import $api from '../../utils/axios';
import { ApiResponse } from '../types/apiTypes';
import { ICategoriesV2 } from '../types/product';

const initialState = {
  loading: false,
  error: null as null | string | undefined,
};

export const categoriesAdapter = createEntityAdapter<ICategoriesV2>();
export const categoriesSelectors = categoriesAdapter.getSelectors(
  (state: RootState) => state.categories
);

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const { data } = await $api.get<ApiResponse<ICategoriesV2>>('/categories/');

    return data.results;
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: categoriesAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      console.log(action.payload)
      categoriesAdapter.setAll(state, action.payload);
    });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
