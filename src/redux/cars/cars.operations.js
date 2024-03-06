import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65e7854153d564627a8ef5fb.mockapi.io/api';

export const getAllCars = createAsyncThunk(
  'api/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/cars');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getCarById = createAsyncThunk(
  'api/getCarById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/cars/${id}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
