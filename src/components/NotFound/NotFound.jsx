import notFound from '../../img/UT8E.gif';
import '../NotFound/NotFound.css'
const NotFound = () => {
  return (
    <>
    <div className="notfound">
      <p>Нет такой страницы</p>
      <img width="330px" src={notFound} alt="not found" />
      </div>
    </>
  );
};
export default NotFound
