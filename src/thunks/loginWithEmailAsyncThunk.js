import { createAsyncThunk } from "@reduxjs/toolkit";
// THUNKS
export const loginWithEmailAsync = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    try {
      const response = await fetch(
        `http://localhost:13000/pickup/auth/login/email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
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
