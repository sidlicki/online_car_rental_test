import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllCars } from './cars.operations';

const initialState = {
  cars: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.isLoading = true;
      state.favorites.push(action.payload);
      state.isLoading = false;
    },
    removeFavorite: (state, action) => {
      state.isLoading = true;
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
      state.isLoading = false;
    },
  },
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
export const { addFavorite, removeFavorite } = carsSlice.actions;
