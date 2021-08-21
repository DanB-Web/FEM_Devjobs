import { useState } from 'react'
import { ReactComponent as Search } from '../assets/desktop/icon-search.svg'
import { ReactComponent as Location } from '../assets/desktop/icon-location.svg'
import '../styles/searchbar.scss'

const SearchBar = ({ setFilterTerms}) => {

  const initialFormState = {
    searchTerm: '',
    location: '',
    fullTime: false
  }

  const [formState, setFormState] = useState(initialFormState)

  const formStateHandler = (e) => {
    const copy = {...formState}
    const id = e.target.id
    if (id === 'searchterm') copy.searchTerm = e.target.value
    if (id === 'location') copy.location = e.target.value
    if (id === 'fulltime') copy.fullTime = !copy.fullTime
    setFormState(copy)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()
    setFilterTerms(formState)
  }

  const clearFormHandler = () => {
    setFormState(initialFormState)
    setFilterTerms(initialFormState)
  }

  return (
    <div className='searchbar-container'>
      <form onSubmit={formSubmitHandler}>
        <div className='search-term'>
          <Search/>
          <input 
            value={formState.searchTerm} 
            id='searchterm'
            type='text' 
            placeholder='Filter by keyword'
            onChange={(e) => formStateHandler(e)}
          ></input>
        </div>
        <div className='search-location'>
          <Location/>
          <input 
          value={formState.location} 
          id='location'
          type='text' 
          placeholder='Filter by location'
          onChange={(e) => formStateHandler(e)}
          ></input>
        </div>
        <div className='search-fulltime'>
          <span>
            <input 
              checked={formState.fullTime} 
              id='fulltime'
              type='checkbox'
              onChange={(e) => formStateHandler(e)}
            ></input>
            <label>Full Time Only</label>
          </span> 
          <button className='btn btn-1' type='submit'>Search</button>
          <button className='btn btn-2' onClick={clearFormHandler}>Clear</button>
        </div>   
      </form>
    </div>
  )
}

export default SearchBar