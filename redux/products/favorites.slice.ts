import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import $api from "../../utils/axios";
import { RootState } from "../store";
import { IFavoritesV, FavoritesState } from "../types/product";
import { ApiResponse } from "../types/apiTypes";

const initialState: FavoritesState = {
  loading: false,
  error: null as null | string | undefined,
  id: [],
  entities: {},
};

export const favoritesAdapter = createEntityAdapter<IFavoritesV>();
export const favoritesSelectors = favoritesAdapter.getSelectors(
  (state: RootState | any) => state.favorites
);

export const fetchfavorites = createAsyncThunk<IFavoritesV[]>(
  "favorites/fetchfavorites",
  async () => {
    const { data } = await $api.get<
      ApiResponse<{ id: number; user: number; products: IFavoritesV[] }>
    >(`/favorites/`);
    console.log(data);
    return data.results.map((result) => result.products).flat();
  }
);

export const addItemToFavorites = createAsyncThunk(
  "favorites/addItemToFavorites",
  async (id: number) => {
    const products = {
      products: [id],
    };
    await $api.post(`/favorites/`, products);
  }
);

export const removeItemFromFavorites = createAsyncThunk(
  "favorites/removeItemFromFavorites",
  async (id: number) => {
    await $api.delete(`/favorites/${id}`);
  }
);

export const addFavoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesAdapter.getInitialState(initialState),
  reducers: {
    addItemToFavorites: (state, action) => {
      favoritesAdapter.addOne(state, { ...action.payload });
    },
  },
  extraReducers: (builder) => {
    // fetch
    builder.addCase(fetchfavorites.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchfavorites.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchfavorites.fulfilled, (state, action) => {
      favoritesAdapter.setAll(state, action.payload);
      state.loading = false;
      state.error = null;
    });
    // delete
    
    builder.addCase(removeItemFromFavorites.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(removeItemFromFavorites.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(removeItemFromFavorites.fulfilled, (state, action) => {
      favoritesAdapter.removeOne(state, action.meta.arg);
      state.loading = false;
    });
  },
});

export const favoritesReducer = addFavoritesSlice.reducer;
