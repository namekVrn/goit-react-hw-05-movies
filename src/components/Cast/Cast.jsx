import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../../service/fetchApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import '../Cast/Cast.css'
const Cast = () => {
  const [dataCast, setDataCast] = useState(null);
  const [error, setError] = useState(null);
  const { idElem } = useParams();
  console.log(idElem);
  useEffect(() => {
    fetchMovieCredits(idElem)
      .then(res => setDataCast(res.cast))
      .catch(error => setError(error));
  }, [idElem]);
  console.log(dataCast)
  return (
    <ul>
          <p>В фильме снимались:</p>
      {dataCast && (
        <ul>
          <Carousel variant="white" wrap="false" className="carousel-inner">
            {dataCast.map(({ id, name, profile_path, character,popularity }) => {
              return (
                
                  <Carousel.Item>
                    <img 
                      className="carousel-img"
                      src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h5 className="md">{name}</h5>
                      <p>
                        {character}
                      </p>
                      <p>Рейтинг актера: {popularity}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                
              );
            })}
          </Carousel>
        </ul>
      )}
    </ul>
  );
};
export default Cast;
