import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_JOBS } from '../utils/graphql'

const JobsList = () => {

const {loading, error, data } = useQuery(GET_JOBS)
const [jobs, setJobs] = useState({})

  useEffect(() => {
    setJobs(data)
  }, [data])

    return (
        <div className='jobslist-container'>
            JobsList
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {data && <p>Data loaded</p>}
        </div>
    )

}

export default JobsList