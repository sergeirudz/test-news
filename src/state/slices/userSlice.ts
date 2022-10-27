import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserState {
  user: string | null;
  token: string | null;
  auth: boolean;
}

const initialState: UserState = {
  user: '',
  token: '',
  auth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.auth = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.auth = false;
    },
    update: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { login, logout, update } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export const selectToken = (state: RootState) => state.user.token;
export const selectAuth = (state: RootState) => state.user.auth;
export default userSlice.reducer;
