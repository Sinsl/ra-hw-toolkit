import data from '../../../test.json';
import { ItemFilm } from '../single/ItemFilm';

export const Favorites = () => {

  const deleteFavor = (id: string) => {
    console.log(id)
  }

  return (
    <div className="result-list">
      {data.map((item) => <ItemFilm key={item.imdbID} item={item} deleteFavor={deleteFavor}/>)}
    </div>
  )
}