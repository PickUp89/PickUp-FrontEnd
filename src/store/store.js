import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../reducers/authSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
