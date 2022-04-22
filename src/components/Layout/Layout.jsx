/* eslint-disable */
import { NavLink, Outlet } from 'react-router-dom';
import '../Layout/link.css'
const Layout = () => {
  return (
    <>
      <header className='header__box'>
        <nav>
          <NavLink to="/" className={({isActive})=> isActive ? "active-link": "nav__link"}>
            HomePage
          </NavLink>
          <NavLink to="/moviespage" className={({isActive})=> isActive ? "active-link": "nav__link"}>
            MoviesPage
          </NavLink>
        </nav>
      </header>
      <Outlet /> 
      <footer className="footer__box">
        <p>KINO-FICHA</p>
      </footer>
    </>
  );
};
export default Layout
