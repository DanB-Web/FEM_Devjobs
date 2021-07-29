import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_JOB } from '../graphql/GET_JOB'
import { BeatLoader } from 'react-spinners';
import Footer from './Footer'
import Alert from './Alert'
import '../styles/jobdetail.scss'

const JobDetail = ({location}) => {

  const { loading, error, data } = useQuery(GET_JOB, { variables: {id: location.param1}})

  const [jobDetails, setJobDetails] = useState({})
  const [company, setCompany] = useState({})

  console.log(jobDetails)

  useEffect(() => {
    if (data) {
      const { job } = data
      setJobDetails(job[0])
      setCompany(job[0].companyByCompany)
    }
  }, [data])

   if (loading) {
    return <div className="beat-loader">
        <BeatLoader size={40} color={'#CDCDCD'}/>
      </div>
  }

   if (error) {
    return <Alert message={error.message}></Alert>
  }

  
  return (
    <div className='jobdetail-container'>
      <div className='jobdetail-company'>
        <div className='jobdetail-company-logo' style={{backgroundColor: company.companyColor}}>
          <img src={location.param2} alt='company icon'/>
        </div>
        <div className='jobdetail-company-details'>
          <h3>{company.companyName}</h3>
          <a href={`${company.companyWebsite}`} target='_blank'>Company Website</a>
        </div> 
        <button className='btn btn-2'>Company Site</button>
      </div>
      <div className='jobdetail-info'>
      </div>
      <Footer jobDetails={jobDetails}/>
    </div>
  )
}

export default JobDetail