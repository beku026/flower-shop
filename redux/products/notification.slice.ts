import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { RootState } from "../store";
import $api from "../../utils/axios";
import { CreateNotificationDto } from "../types/notification";
import { INotification } from "../types/notification";

interface NotificationState {
  ids: [];
  entities: {};
  loading: false;
  error: null;
}

const initialState: NotificationState = {
  loading: false,
  error: null,
  ids: [],
  entities: {},
};

export const notificationAdapter = createEntityAdapter<INotification>();
export const notificationSelectors = notificationAdapter.getSelectors(
  (state: RootState) => state.notification
);
export const createNotification = createAsyncThunk(
  "notification/createNotification",
  async ({ client, phone }: CreateNotificationDto) => {
    const { data } = await $api.post<INotification>(
      "/companies/notification/",
      { client, phone }
    );

    return data;
  }
);

export const notificationSlice = createSlice({
  name: "notification",
  initialState: notificationAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    // CREATE_NOTIFICATION
    builder.addCase(createNotification.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(createNotification.fulfilled, (state: any, action: any) => {
      state.loading = false;
      notificationAdapter.addOne(state, action.payload);
    });
    builder.addCase(createNotification.rejected, (state: any, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const notificationReducer = notificationSlice.reducer;
