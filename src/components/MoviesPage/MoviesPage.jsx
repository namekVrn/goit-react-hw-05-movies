import {useState, useEffect} from 'react';
import '../MoviesPage/MoviesPage.css'
import ResultMovieList from '../ResultMovieList/ResultMovieList';
const MoviesPage = ({addName, nameFilm}) => {
    const [search, setSearch] = useState('')

    const onSearch = (e) => {
        const {name, value} = e.target;
        setSearch(value)
        console.log(search)
    }
    const onSubmitForm = (e) => {
        e.preventDefault()
        addName(search)
    }
    return (
        <>
            <form onSubmit={onSubmitForm} className='moviesPage__form'>
                <input className="moviesPage__search--input" type="text" name="serch" value={search} onChange={onSearch}/>
                <button className="moviesPage__serch--btn" type="submit">Serch</button>
            </form>
            <div >
                <ResultMovieList nameFilm={nameFilm}/>
            </div>
        </>
    )

}
export default MoviesPage