import { useState } from 'react'
import { ReactComponent as Location } from '../../assets/desktop/icon-location.svg'
import '../../styles/mobilefilter.scss'

const MobileFilter = ({filterTerms, setFilterTerms, closePortalHandler}) => {

  const [location, setLocation] = useState('')
  const [fullTime, setFullTime] = useState(false)

  const locationHandler = (e) => {
    setLocation(e.target.value)
  }

  const fullTimeHandler = () => {
    fullTime ? setFullTime(false) : setFullTime(true)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const copy = {...filterTerms}
    setFilterTerms({...copy, location: location, fullTime: fullTime})
    closePortalHandler()
  }

  return (
    <div className='mobilefilter-container'>
      <form>
        <fieldset className='mobilefilter-location'>
        <Location/>
          <input 
            type='text' 
            value={location}
            placeholder='Filter by location...'
            onChange={locationHandler}
            ></input>
        </fieldset>
        <fieldset className='mobilefilter-checkbox'>
          <input 
          type='checkbox' 
          checked={fullTime}
          onChange={fullTimeHandler}
          ></input>
          <label>Full Time Only</label>
        </fieldset>
        <button className='btn btn-1' onClick={submitHandler}>Search</button>
      </form>
    </div>
  )
}

export default MobileFilter