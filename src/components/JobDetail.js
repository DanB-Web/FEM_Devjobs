import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_JOB } from '../graphql/GET_JOB'
import '../styles/jobdetail.scss'

const JobDetail = ({location}) => {

  const { loading, error, data } = useQuery(GET_JOB, { variables: {id: location.param1}})

  const [jobDetails, setJobDetails] = useState({})

  useEffect(() => {
    if (data) {
      const { job } = data
      setJobDetails(job[0])
    }
  }, [data])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error...</p>
  }

  
  return (
    <div>
      JOB DETAIL
      {jobDetails.position}
    </div>
  )
}

export default JobDetail