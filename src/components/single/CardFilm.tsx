import film from '../../../test2.json';

export const CardFilm = () => {
  return (
    <div className='film' data-id={film.imdbID}>
      <div className="film-action">
        <div className="film-action-btn">
          <span className="material-icons icon-arrow_back">arrow_back</span>
          <span>Назад</span>
        </div>
        <div className="film-action-btn">
          <span className="material-icons icon-star">star</span>
          <span>В избранное</span>
        </div>
      </div>
      <div className="film-header">
        <div className="film-img" style={{backgroundImage: `url(${film.Poster})`}}></div>
        <div className="film-details">
          <div className="film-title">{film.Title}</div>
          <div className="film-year"><span className="film-label">Год выпуска: </span>{film.Year}</div>
          <div className="film-genre"><span className="film-label">Жанр: </span>{film.Genre}</div>
          <div className="film-runtime"><span className="film-label">Продолжительность: </span>{film.Runtime}</div>
          <div className="film-riting"><span className="film-label">Рейтинг: </span>{film.Ratings[0].Value}</div>
          <div className="film-director"><span className="film-label">Режисер: </span>{film.Director}</div>
          <div className="film-actors"><span className="film-label">Актеры: </span>{film.Actors}</div>
          <div className="film-plot"><span className="film-label">Описание: </span>{film.Plot}</div>
        </div>
      </div>
    </div>
  )
}