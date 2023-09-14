import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ItemFilmProp } from "../../types/types";
import { removeFilm } from "../../redux/slices/favoritesSlice"

export const ItemFilm = ({item, type}: ItemFilmProp) => {
  const plug = import.meta.env.VITE_HOLDER_100;
  const dispatch = useDispatch();

  const deleteFavor = () => {
    dispatch(removeFilm(item.imdbID))
  }
  
  return (
    <div className="result-item">
      <div className="result-item_img" style={{backgroundImage: `url(${item.Poster === 'N/A' ? plug : item.Poster})`}}></div>
      <div className="result-item_content">
        <div className="result-item_title">{item.Title}</div>
        <div className="result-item_type">Тип: {item.Type}</div>
        <div className="result-item_year">Год: {item.Year}</div>
        <Link to={"/ra-hw-toolkit/" + item.imdbID}>подробнее</Link>
      </div>
      {type && <span className="material-icons icon-favor" onClick={deleteFavor}>delete</span> }
    </div>
  )
}