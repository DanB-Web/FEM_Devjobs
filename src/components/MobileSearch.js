import { useState } from 'react'
import { ReactComponent as Filter } from '../assets/mobile/icon-filter.svg'
import { ReactComponent as Search } from '../assets/desktop/icon-search.svg'

import '../styles/mobilesearch.scss'

const MobileSearch = ({ filterTerms, setFilterTerms, setViewMobileFilter }) => {

  const [formState, setFormState] = useState('')

  const filterHandler = (e) => {
    e.preventDefault()
    setViewMobileFilter(true)
  }

  const searchTermHandler = (e) => {
    e.preventDefault()
    const copy = {...filterTerms}
    setFilterTerms({...copy, searchTerm: formState})
  }

  const clearTermsHandler = (e) => {
    e.preventDefault()
    setFilterTerms({
      searchTerm: '',
      location: '',
      fullTime: false
    })
    setFormState('')
  }

  return (
    <div className='mobilesearch-container'>
      <form>
        <input 
          type='text' 
          value={formState} 
          placeholder={'Enter keyword...'}
          onChange={e => setFormState(e.target.value)}
          ></input>
          <button className='filter-btn' onClick={filterHandler}><Filter/></button>
          <button className='search-btn btn' onClick={searchTermHandler}><Search/></button>
          <button className='clear-btn btn btn-1' onClick={clearTermsHandler}>Clear</button>
      </form>
    </div>
  )
}

export default MobileSearch