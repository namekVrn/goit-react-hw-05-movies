import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import listDate from '../utils/listDate'
const FilterPanel = ({filterUpdate}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [yearFilter, setYearFilter] = useState('');
  const filterQuery = searchParams.get('filter') || "";
  let arrayListDate = listDate()
  function handleSubmit(e){
    e.preventDefault()
    const target = e.target
    const queryFilter = target.year.value
    console.log(queryFilter)
    setYearFilter(queryFilter)
    filterUpdate(yearFilter)
    setSearchParams({filter: yearFilter})
    console.log("нажали")
    
  }
  const resetFilter = () => {
    setYearFilter('')
    handleSubmit()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Поиск по году:
          <select name="year">
            <option value="" disabled>
              ...
            </option>
            {arrayListDate.map(item => {
              return <option id={item} value={item.toString()}>{item.toString()}</option>;
            })}
          </select>
        </label>

        <button type="submit">фильтровать</button>
        <button type="button" onClick={()=>{resetFilter()}}>сбросить</button>

      </form>
    </>
  );
};
export default FilterPanel;
