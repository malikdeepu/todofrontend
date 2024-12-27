// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk('user/register', async (userData) => {
  const response = await axios.post('https://todobackend-2yor.onrender.com/api/auth/register', userData);
  return response.data;
});

export const loginUser = createAsyncThunk('user/login', async (userData) => {
  const response = await axios.post('https://todobackend-2yor.onrender.com/api/auth/login', userData);
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: localStorage.getItem('token') || null,
    status: 'idle',
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
