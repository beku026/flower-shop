import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import $api from '../../utils/axios';
import { RootState } from '../store';
import {
  AuthState,
  IAuthV,
  ResendActivationDto,
  SetPasswordDto,
  SignInUserDto,
  SignUpUserConfirmationSmsDto,
  SignUpUserDto,
} from '../types/auth';

const initialState: AuthState = {
  isAuthenticated: false,
  signup: false,
  loading: false,
  error: null,
  username: null,
  tel: null,
  mail: null,
  ids: [],
  entities: {},
};

export const authAdapter = createEntityAdapter<IAuthV>();
export const authSelectors = authAdapter.getSelectors(
  (state: RootState) => state.auth
);

export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async ({ email, password }: SignUpUserDto) => {
    try {
      await $api.post('/users/auth/users/', { email, password });
    } catch (e: any) {
      return e.error.message;
    }
  }
);

export const signUpUserActivation = createAsyncThunk(
  'auth/signUpUserActivation',
  async ({ uid, token }: SignUpUserConfirmationSmsDto) => {
    try {
      const { data } = await $api.post('/users/auth/users/activation/', {
        uid,
        token,
      });
      return data;
    } catch (e: any) {
      return e.error.message;
    }
  }
);

export const resendActivation = createAsyncThunk(
  'auth/resendActivation',
  async ({ email }: ResendActivationDto) => {
    try {
      await $api.post('/users/auth/users/resend_activation/', { email });
    } catch (e: any) {
      return e.error.message;
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }: SignInUserDto) => {
    try {
      const res = await $api
        .post('/users/auth/jwt/create/', { email, password })
        .then(({ data }) => {
          localStorage.setItem('accessToken', data.access);
          localStorage.setItem('refreshToken', data.refresh);
        });
      return res;
    } catch (e: any) {
      localStorage.remove('accessToken');
      localStorage.remove('refreshToken');
      return e.error.message;
    }
  }
);

export const logoutUser = createAsyncThunk('auth/logoutUser', function () {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
});

export const setPassword = createAsyncThunk(
  'auth/setPassword',
  async ({ new_password, current_password }: SetPasswordDto) => {
    try {
      await $api.post('/users/auth/users/set_password/', {
        new_password,
        current_password,
      });
    } catch (e: any) {
      return e.error.message;
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // SIGNUP USER
    builder.addCase(signUpUser.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(signUpUser.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.signup = true;
      state.error = null;
    });
    builder.addCase(signUpUser.rejected, (state: any, action: any) => {
      state.error = action.error.message;
      state.signup = false;
      state.loading = false;
    });
    // SIGNUP USER ACTIVATION
    builder.addCase(signUpUserActivation.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(signUpUserActivation.fulfilled, (state: any) => {
      state.userActivate = true;
      state.loading = false;
    });
    builder.addCase(
      signUpUserActivation.rejected,
      (state: any, action: any) => {
        state.error = action.error;
        state.loading = false;
      }
    );
    //RESEND ACTIVATION
    builder.addCase(resendActivation.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(resendActivation.fulfilled, (state: any) => {
      state.loading = false;
    });
    builder.addCase(resendActivation.rejected, (state: any, action: any) => {
      state.error = action.error;
      state.loading = false;
    });
    //USER LOGIN
    builder.addCase(loginUser.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state: any, action: any) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.username = action.meta.arg.email;
    });
    builder.addCase(loginUser.rejected, (state: any, action: any) => {
      state.isAuthenticated = false;
      state.username = null;
      state.loading = false;
      state.error = action.error.message;
    });
    //LOGOUT USER
    builder.addCase(logoutUser.fulfilled, (state: any) => {
      state.loading = false;
      state.isAuthenticated = null;
      state.ids = null;
      state.entities = null;
      state.email = null;
    });
    // SET PASSWORD
    builder.addCase(setPassword.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(setPassword.fulfilled, (state: any) => {
      state.loading = false;
    });
    builder.addCase(setPassword.rejected, (state: any, action: any) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

export const authReducer = authSlice.reducer;
