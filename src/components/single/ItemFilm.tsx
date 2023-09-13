import { Link } from "react-router-dom";
import { ItemFilmProp } from "../../types/types";

export const ItemFilm = ({item, deleteFavor}: ItemFilmProp) => {
  return (
    <div className="result-item">
      <div className="result-item_img" style={{backgroundImage: `url(${item.Poster})`}}></div>
      <div className="result-item_content">
        <div className="result-item_title">{item.Title}</div>
        <div className="result-item_type">Тип: {item.Type}</div>
        <div className="result-item_year">Год: {item.Year}</div>
        <Link to={"/ra-hw-toolkit/" + item.imdbID}>подробнее</Link>
      </div>
      {deleteFavor && <span className="material-icons icon-favor" onClick={() => deleteFavor(item.imdbID)}>delete</span> }
    </div>
  )
}