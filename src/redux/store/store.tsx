import { configureStore } from "@reduxjs/toolkit";
import searchReduser from "../slices/searchSlice";
import listFilmReducer from "../slices/getListFilmsSlice";
import filmReducer from "../slices/getFilmSlice";
import favoritesReducer from "../slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    search: searchReduser,
    listFilms: listFilmReducer,
    film: filmReducer,
    favorites: favoritesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
