
export interface SearchFilmCard {
  Title: string
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}
export interface ItemFilmProp {
  item: SearchFilmCard,
  deleteFavor?: (id: string) => void
}