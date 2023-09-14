import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchFilm } from "../../redux/slices/getFilmSlice";
import { useParams, useNavigate } from "react-router-dom";
import { addFilm, removeFilm } from "../../redux/slices/favoritesSlice";
import { RootState, AppDispatch } from "../../redux/store/store";

export const CardFilm = () => {
  const navigate = useNavigate();
  const plug = import.meta.env.VITE_HOLDER_300;
  const { id } = useParams();
  const {film, loading} = useSelector((state: RootState) => state.film);
  const {favorites} = useSelector((state: RootState)  => state.favorites);
  const [favor, setFavor] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    setFavor(false);
    dispatch(fetchFilm(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    if(favorites.length) {
      if(favorites.some(item => item.imdbID === film.imdbID)) {
        setFavor(true);
      } else {
        setFavor(false)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[film])

  const onAddFavor = () => {
    dispatch(addFilm(film));
    setFavor(true);
  }

  const onRemoveFavor = () => {
    dispatch(removeFilm(film.imdbID));
    setFavor(false);
  }

  return (
    <div className='film' data-id={film.imdbID}>
      <div className="film-action">
        <div className="film-action-btn" onClick={() => navigate(-1)}>
          <span className="material-icons icon-arrow_back">arrow_back</span>
          <span>Назад</span>
        </div>
        {favor
          ? (
            <div className="film-action-btn" onClick={onRemoveFavor}>
              <span className="material-icons icon-star">delete</span>
              <span>из избранного</span>
            </div>            
          ) : (
            <div className="film-action-btn" onClick={onAddFavor}>
              <span className="material-icons icon-star">star</span>
              <span>в избранное</span>
            </div>
          )          
        }
      </div>
      {loading && <h4>Загрузка...</h4>}
      {(film && !loading) &&
        (<div className="film-header">
          <div className="film-img" style={{backgroundImage: `url(${film.Poster === 'N/A' ? plug : film.Poster})`}}></div>
          <div className="film-details">
            <div className="film-title">{film.Title}</div>
            <div className="film-year"><span className="film-label">Год выпуска: </span>{film.Year}</div>
            <div className="film-type"><span className="film-label">Тип: </span>{film.Type}</div>
            <div className="film-genre"><span className="film-label">Жанр: </span>{film.Genre}</div>
            <div className="film-runtime"><span className="film-label">Продолжительность: </span>{film.Runtime}</div>
            <div className="film-riting"><span className="film-label">Рейтинг: </span>{film.Ratings}</div>
            <div className="film-director"><span className="film-label">Режисер: </span>{film.Director}</div>
            <div className="film-actors"><span className="film-label">Актеры: </span>{film.Actors}</div>
            <div className="film-plot"><span className="film-label">Описание: </span>{film.Plot}</div>
          </div>
        </div>)
      }      
    </div>
  )
}