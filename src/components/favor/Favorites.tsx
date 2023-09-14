import { useSelector } from 'react-redux';
import { ItemFilm } from '../single/ItemFilm';
import { RootState } from '../../redux/store/store';

export const Favorites = () => {
  const {favorites} = useSelector((state: RootState) => state.favorites);

  return (
    <div className="result-list">
      {favorites.length 
        ? favorites.map((item) => <ItemFilm key={item.imdbID} item={item} type='favor'/>)
        : (<div>В Избранном отсутствуют фильмы</div>)
      }
    </div>
  )
}