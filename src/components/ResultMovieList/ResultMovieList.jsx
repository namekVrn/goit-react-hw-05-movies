import { useState, useEffect } from 'react';
import FilterPanel from '../FilterPanel/FilterPanel'
import { Link } from 'react-router-dom';
import '../ResultMovieList/ResultMovieList.css';
import { fetchSearchMovie } from '../../service/fetchApi';
import imagenone from '../../img/reel-alwin-1.gif'
const ResultMovieList = ({objParam}) => {
  const {nameFilm, filter} = objParam
  console.log(nameFilm)
  const [dataMovies, setDataMovies] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    if (nameFilm) {
      fetchSearchMovie(nameFilm)
        .then(data => setDataMovies(data.results))
        .catch(error => {
          setError(true);
        });
    }
  }, [nameFilm,filter]);
  console.log(dataMovies);
  // let resultTest = null
  // if(dataMovies){
  //   resultTest = dataMovies.filter(iter=>iter.release_date.includes("2017"))
  // }
  
  return (
    <>
    {/* {dataMovies && <FilterPanel filterUpdate={filterUpdate}/>} */}
    <div className="resultmovieslist__preview">
      {error && <p>error</p>}
      {dataMovies &&
        dataMovies.filter(({release_date})=>{return release_date.includes(filter.toString())}).map(
          ({
            poster_path,
            original_title,
            id,
            original_language,
            release_date,
            vote_average,
            vote_count,
            overview,
          }) => {
            return (
              
                  <Link className="resultmovieslist__link" key={id} to={`/moviespage/${id}`}>
                    <div className="resultmovieslist__itemFilm" >
                      <div className="resultmovieslist__posterBox">
                        <img
                          width="230px"
                          src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : imagenone}
                          alt={original_title}
                        />
                      </div>
                      <div className="resultmovieslist__shortdescription">
                        <h3>{original_title}</h3>
                        <p>{overview}</p>
                        <span className="resultmovieslist__date--label">{release_date ? release_date : <p>нет даты</p>}</span>
                        <p>Рейтинг: {vote_average}</p>
                        <p>Язык: {original_language}</p>
                      </div>
                    </div>
                  </Link>
               
            );
          }
        )
        
      }
    </div>
    </>
    
  );
};
export default ResultMovieList;
