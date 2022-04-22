import {useState} from 'react';
import '../MoviesPage/MoviesPage.css'
import ResultMovieList from '../ResultMovieList/ResultMovieList';
import listDate from '../utils/listDate'
const MoviesPage = ({addName, objData}) => {
    const [search, setSearch] = useState('')
    const [yearFilter, setYearFilter] = useState('');
    console.log(objData)
    let arrayListDate = listDate()
    const onSearch = (e) => {
        const {name, value} = e.target; // eslint-disable-line
        switch (name) {// eslint-disable-line
            case 'serch':
              setSearch(value)
              console.log(value)
              break
            case 'year':
              setYearFilter(value)
              console.log(value)
              break
          }
    }
    
    const onSubmitForm = (e) => {
        e.preventDefault()
        addName({nameFilm: search, filter: yearFilter})
    }
    return (
        <>
            <form onSubmit={onSubmitForm} className='moviesPage__form'>
                <input className="moviesPage__search--input" type="text" name="serch" value={search} onChange={onSearch}/>
                <button className="moviesPage__serch--btn" type="submit">Serch</button>
                <label>
          Поиск по году:
          <select name="year" onChange={onSearch} >
            <option  value="" >
              ...
            </option>
            {arrayListDate.map(item => {
              return <option key={item} value={item.toString()}>{item.toString()}</option>;
            })}
          </select>
        </label>
            </form>
            
            <div >
                <ResultMovieList objParam={objData}/>
            </div>
        </>
    )

}
export default MoviesPage