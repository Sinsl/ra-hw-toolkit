import { createSlice } from "@reduxjs/toolkit";
import { StateFavorites } from "../../types/types";

const initialState: StateFavorites = {
  favorites: []
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFilm: (state, action) => {
      state.favorites.push(action.payload)
      localStorage.setItem('favor', JSON.stringify(state.favorites));
    },
    removeFilm: (state, action) => {
      state.favorites = state.favorites.filter(film => film.imdbID !== action.payload)
      localStorage.setItem('favor', JSON.stringify(state.favorites));
    },
    addAllFilm: (state, action) => {
      state.favorites = (action.payload)
    },
  }
})

export const { addFilm, removeFilm, addAllFilm } = favoritesSlice.actions;
export default favoritesSlice.reducer;