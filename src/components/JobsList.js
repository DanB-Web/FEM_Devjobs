import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_JOBS } from '../utils/graphql'
import SearchBar from './SearchBar'
import JobTile from './JobTile'
import Alert from './Alert'

const JobsList = (props) => {

  const { jobsList, setJobsList, fetchOffset, setFetchOffset, filteredList, setFilterTerms } = props
  
  const {loading, error, data, refetch } = useQuery(GET_JOBS, {variables: { offset: fetchOffset }})

  //SET JOBSLIST ON DATA FETCHS
  useEffect(() => {
    if (data) {
      const { job } = data
      if (jobsList.length !== 0) {
        const copy = [...jobsList]
        setJobsList([...copy, ...job])  
      } else {
        setJobsList(job)
      } 
    } 
  // eslint-disable-next-line
  }, [data])

  //PAGINATION
  const loadMoreJobsHandler = () => {
    setFetchOffset(fetchOffset + 6)
    refetch()
  }

  return (
      <div className='jobslist-container'>
          JobsList
          <SearchBar setFilterTerms={setFilterTerms}/>
          {loading && <p>Loading...</p>}
          {error && <Alert message={error.message}></Alert>}
          {data && filteredList.map(((job, index) => (
            <JobTile key={index} job={job}></JobTile>
          )))}
          <button onClick={loadMoreJobsHandler}>MOAR</button>
      </div>
  )

}

export default JobsList