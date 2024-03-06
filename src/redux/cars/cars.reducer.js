import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllCars } from './cars.operations';

const initialState = {
  cars: [],
  favorites: [],
  isLoading: false,
  error: null,
  reducers: {},
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cars = payload;
      })
      .addMatcher(isAnyOf(getAllCars.pending), state => {
        state.isLoading = true;
      })

      .addMatcher(isAnyOf(getAllCars.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

// Генератори екшн-креаторс
export const carsReducer = carsSlice.reducer;
