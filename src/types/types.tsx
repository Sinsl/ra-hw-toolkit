export interface SearchFilmCard {
  Title: string
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}
export interface FilmCard {
  Poster: string,
  Title: string,
  Year: string,
  Genre: string,
  Runtime: string,
  Ratings: string,
  Director: string,
  Actors: string,
  Plot: string,
  imdbID: string,
  Type: string
}
export interface ItemFilmProp {
  item: SearchFilmCard,
  type?: string
}
export interface StateSearch {
  valueInput: string
}
export interface StateListFilm {
  films: SearchFilmCard[],
  loading: boolean,
  error: null | boolean
}
export interface StateCardFilm {
  film: FilmCard,
  loading: boolean,
  error: null | boolean
}
export interface StateFavorites {
  favorites: FilmCard[]
}

export interface Store {
  search: StateSearch,
  listFilms: StateListFilm,
  film: StateCardFilm,
  favorites: StateFavorites
}
export interface RouteParams {
  id: string | undefined;
}