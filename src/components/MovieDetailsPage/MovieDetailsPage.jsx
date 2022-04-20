import { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../../service/fetchApi';
import '../MovieDetailsPage/MovieDetailsPage.css';
import imagenone from '../../img/reel-alwin-1.gif';
const MovieDetailsPage = () => {
  const [filmDetails, setFilmDetails] = useState(null);
  const [error, setError] = useState(null);
  const { idElem } = useParams();
  const navigate = useNavigate();
  console.log(navigate);
  useEffect(() => {
    if (idElem) {
      fetchMovieDetails(idElem)
        .then(data => setFilmDetails(data))
        .catch(error => setError(error));
    }
  }, [idElem]);
  console.log(filmDetails);
  const goBack = () => {
    navigate(-1);
  };
  //  console.log(poster_path)
  return (
    <>
      {filmDetails && (
        <div className="moviedetailspage__details--box">
          <button
            className="moviedetailspage__btn--prevPage tada"
            onClick={goBack}
            type="button"
          >
            ←
          </button>
          <div className="moviedetailspage__image--box">
            <img
              className="moviedetailspage__image zoomInDown"
              width="320px"
              src={`https://image.tmdb.org/t/p/w300${filmDetails.poster_path}`}
              alt={filmDetails.title}
            />
          </div>
          <div className="moviedetailspage__details--info">
            <div className="moviedetailspage__details--box">
              <h3 className="moviedetailspage__title">
                {filmDetails.original_title}
              </h3>
              <span className="moviedetailspage__title--label">
                {filmDetails.tagline}
              </span>
            </div>

            <p className="moviedetailspage__details--description">
              Описание:
              <br />
              {filmDetails.overview}
            </p>
            <p>{filmDetails.release_date}</p>
            <p>Genres:</p>
            {filmDetails.genres && (
              <ul>
                {filmDetails.genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            )}
            <div className="moviedetailspage__details--inform">
                <ul className="moviedetailspage__details--list">
                    <li className="moviedetailspage__details--items"><NavLink className='moviedetailspage__details--items' to="cast">Cast</NavLink></li>
                    <li className="moviedetailspage__details--items"><NavLink className='moviedetailspage__details--items' to="reviews">Reviews</NavLink></li>
                </ul>
                <Outlet />
              {/* Outlet содержит компонент cast или reviews */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default MovieDetailsPage;
