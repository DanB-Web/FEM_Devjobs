import SearchBar from './SearchBar'
import MobileSearch from './MobileSearch'
import JobTile from './JobTile'
import Alert from './Alert'
import { BeatLoader } from 'react-spinners';
import '../styles/jobslist.scss'

const JobsList = (props) => {

  const { error, loading, loadMoreJobsHandler, filteredList, filterTerms, setFilterTerms, setViewMobileFilter } = props
  
  if (loading) {
    return <div className="beat-loader">
        <BeatLoader size={40} color={'#CDCDCD'}/>
      </div>
  }

  if (error) {
    return <Alert message={error.message}></Alert>
  }

  return (
      <div className='jobslist-container'>
        <SearchBar setFilterTerms={setFilterTerms}/>
        <MobileSearch 
          filterTerms={filterTerms}
          setFilterTerms={setFilterTerms}
          setViewMobileFilter={setViewMobileFilter}
        />
      <div className='jobslist-list'>
        {filteredList.map(((job, index) => (
          <JobTile key={job.id} job={job}></JobTile>
        )))}
      </div>
         <button
          className='btn btn-1'
          onClick={loadMoreJobsHandler}>Load More</button>
      </div>
  )

}

export default JobsList