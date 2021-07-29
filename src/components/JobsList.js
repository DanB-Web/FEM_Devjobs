import SearchBar from './SearchBar'
import JobTile from './JobTile'
import Alert from './Alert'
import '../styles/jobslist.scss'

const JobsList = (props) => {

  const { error, loading, loadMoreJobsHandler, filteredList, setFilterTerms } = props
  
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <Alert message={error.message}></Alert>
  }

  return (
      <div className='jobslist-container'>
        <SearchBar setFilterTerms={setFilterTerms}/>
      <div className='jobslist-list'>
        {filteredList.map(((job, index) => (
          <JobTile key={index} job={job}></JobTile>
        )))}
      </div>
         <button
          className='btn btn-1'
          onClick={loadMoreJobsHandler}>Load More</button>
      </div>
  )

}

export default JobsList