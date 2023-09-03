import { createSlice } from "@reduxjs/toolkit";
import { loginWithEmailAsync } from "../thunks/loginWithEmailAsyncThunk";

const initialState = {
  me: null,
  isAuthenticated: false,
  error: null, // either null or the error message
  loading: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutAction: (state) => {
      state.me = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginWithEmailAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithEmailAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.me = action.payload.user;
        state.isAuthenticated = action.payload.isAuthenticated;
        state.error = action.payload.error;
      })
      .addCase(loginWithEmailAsync.rejected, (state, action) => {
        state.loading = false;
        state.me = null;
        state.error = action.error.message;
      });
  },
});

export const { logoutAction } = userSlice.actions;
export default userSlice.reducer;
