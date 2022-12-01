import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productReducer } from "./products/product.slice";
import { cartReducer } from "./products/cart.slice";
import { authReducer } from "./products/auth.slice";
import { categoriesSlice } from "./products/categories.slice";
import { notificationSlice } from "./products/notification.slice";
import { addFavoritesSlice } from "./products/favorites.slice";

const store = configureStore({
  reducer: {
    product: persistReducer(
      {
        key: 'products',
        blacklist: ['loading', 'error'],
        storage,
      },
      productReducer
    ),
    categories: categoriesSlice.reducer,
    cart: persistReducer(
      {
        key: "cart",
        blacklist: ["loading", "error"],
        storage,
      },
      cartReducer
    ),
    auth: persistReducer(
      {
        key: 'auth',
        blacklist: ['loading', 'error'],
        storage,
      },
      authReducer
    ),
    notification: notificationSlice.reducer,
    favorites: addFavoritesSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        'persist/PERSIST',
        'persist/REHYDRATE',
        'pause/PAUSE',
        '/purge/PURGE',
        '/register/REGISTER',
      ],
    },
  }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
