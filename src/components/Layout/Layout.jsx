import { Link, Outlet } from 'react-router-dom';
import '../Layout/link.css'
const Layout = () => {
  return (
    <>
      <header className='header__box'>
        <nav>
          <Link to="/" className="nav__link">
            HomePage
          </Link>
          <Link to="/moviespage" className="nav__link">
            MoviesPage
          </Link>
        </nav>
      </header>
      <Outlet /> //Динамические стр.
      <footer className="footer__box">
        <p>KINO-FICHA</p>
      </footer>
    </>
  );
};
export default Layout
