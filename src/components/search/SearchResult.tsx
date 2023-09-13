import { ItemFilm } from '../single/ItemFilm'
import data from '../../../test.json'

export const SearchResult = () => {
  return (
    <div className="result-list">
      {data.map((item) => <ItemFilm key={item.imdbID} item={item}/>)}
    </div>
  )
}