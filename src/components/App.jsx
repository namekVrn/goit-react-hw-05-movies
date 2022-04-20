import {Routes, Route} from 'react-router-dom';
import { useState, useEffect} from 'react';
import Layout  from '../components/Layout/Layout';
import HoumePage from './HoumePage/HoumePage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import '../components/App.css'
import MoviesPage from './MoviesPage/MoviesPage';
import Cast from '../components/Cast/Cast'
import Reviews from './Reviews/Reviews';
import NotFound from './NotFound/NotFound'
export const App = () => {
  const [searchName, setSearchName] = useState('');
  const addName = (name) => {
    setSearchName(name)
    console.log(searchName)
  }
 
  return (
   <div className='app__center'>
     <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HoumePage/>}/>
          {/* <Route path="/:idElem" element={<MovieDetailsPage/>} /> */}
          <Route path='/moviespage' element={<MoviesPage addName={addName} nameFilm={searchName}/>}/>
          {/* <Route path=":idElem" element={<MovieDetailsPage/>} /> */}
          <Route path="/moviespage/:idElem/" element={<MovieDetailsPage/>}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Route>
     </Routes>
   </div>
  );
};
