import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StateCardFilm, FilmCard } from "../../types/types";

const initialState: StateCardFilm = {
  film: {} as FilmCard,
  loading: false,
  error: null
}

export const fetchFilm = createAsyncThunk(
  'film/fetchFilm',
  async (id: string | undefined) => {
    if (id) {
      return await fetch(import.meta.env.VITE_URL + 'i=' + id.toLowerCase())
      .then(res => res.json())
    }    
  }
)

export const getFilmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    clearSearch: (state => {
      state.film = {} as FilmCard
    })
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.loading = true,
        state.error = null
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        const {Poster, Title, Year, Genre, Runtime, Ratings, Director, Actors, Plot, imdbID, Type} = action.payload;
        state.film = {Poster, Title, Year, Genre, Runtime, Ratings: Ratings.length ? Ratings[0].Value : 'N/A', Director, Actors, Plot, imdbID, Type},
        state.loading = false,
        state.error = null
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.loading = false,
        state.error = true
      })
  }
})

export const { clearSearch } = getFilmSlice.actions;
export default getFilmSlice.reducer;