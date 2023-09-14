import { ItemFilm } from '../single/ItemFilm'
import { useSelector } from "react-redux";
import { RootState } from '../../redux/store/store';


export const SearchResult = () => {
  const {films, loading} = useSelector((state: RootState) => state.listFilms);

  return (
    <div className="result-list">
      {loading && <h4>Загрузка...</h4>}
      {(films?.length && !loading)
        ? (films.map((item) => <ItemFilm key={item.imdbID} item={item}/>))
        : (<div>Данные не найдены</div>)
      }
    </div>
  )
}
