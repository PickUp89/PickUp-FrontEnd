import { createAsyncThunk } from "@reduxjs/toolkit";
// THUNKS
export const loginWithEmailAsync = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    try {
      const apiUrl = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData);
      }
      const userData = responseData.user;
      return { user: userData, isAuthenticated: true, error: null };
    } catch (error) {
      console.error(error);
      return { user: null, isAuthenticated: false, error: error.message };
    }
  }
);
