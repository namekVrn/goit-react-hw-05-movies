import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../service/fetchApi';

import '../Cast/Cast.css'
const Reviews = () => {
  const [dataCast, setDataCast] = useState(null);
  const [error, setError] = useState(null); // eslint-disable-line
  const { idElem } = useParams();
  console.log(idElem);
  useEffect(() => {
    fetchMovieReviews(idElem)
      .then(res => setDataCast(res.results))
      .catch(error => setError(error));
  }, [idElem]);
  console.log(dataCast)
  return (
      <>
       {dataCast ? (
            <ul>
              {dataCast.map(({ id, author, content }) => (
                  <li key={id}>                      
                      <h3>Author: {author}</h3>
                      <p>{content}</p>

                  </li>
              ))}
            </ul>
            ):(
            <p>We don`t have any reviews for this movie</p>
          )}
      </>
      
  )
};
export default Reviews;
