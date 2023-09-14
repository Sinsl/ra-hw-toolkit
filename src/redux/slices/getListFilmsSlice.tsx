import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StateListFilm } from "../../types/types";

const initialState: StateListFilm = {
  films: [],
  loading: false,
  error: null
}

export const fetchListFilm = createAsyncThunk(
  'listFilms/fetchListFilm',
  async (title: string) => {
    return await fetch(import.meta.env.VITE_URL + 's=' + title.toLowerCase())
      .then(res => res.json())
  }
)

export const getListFilmSlice = createSlice({
  name: 'listFilms',
  initialState,
  reducers: {
    clearSearch: (state => {
      state.films = []
    })
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListFilm.pending, (state) => {
        state.loading = true,
        state.error = null
      })
      .addCase(fetchListFilm.fulfilled, (state, action) => {
        state.films = action.payload.Search,
        state.loading = false,
        state.error = null
      })
      .addCase(fetchListFilm.rejected, (state) => {
        state.loading = false,
        state.error = true
      })
  }
})

export const { clearSearch } = getListFilmSlice.actions;
export default getListFilmSlice.reducer;