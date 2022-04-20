import { useState, useEffect } from 'react';
import {fetchTrending} from '../../service/fetchApi'
import {Link} from 'react-router-dom'
import '../HoumePage/HoumePage.css'

const HoumePage = () => {
  const [popularFilm, setPopulatFilm] = useState(null)
  useEffect(()=>{
    fetchTrending().then(response=>{
      setPopulatFilm(response.results)
      console.log(response.results)
    })
  },[])
  return <div className="houmepage__background">
      <ul className='houmepage__list'>
        {popularFilm && popularFilm.map(({title, id})=>{
          return(
            <li key={id} className='houmepage__item--list'>
            <Link className='houmepage__item--list' to ={`/moviespage/${id}`}>{title}</Link>
            </li>
          )
        })}
         
      </ul>
  </div>;
};
export default HoumePage;
