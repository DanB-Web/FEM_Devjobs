import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_JOB } from '../../graphql/GET_JOB'
import { BeatLoader } from 'react-spinners';
import DetailHeader from './DetailHeader';
import DetailFooter from './DetailFooter'
import Alert from '../Alert'
import '../../styles/jobdetail.scss'

const JobDetail = ({location, showApplyPortal}) => {

  const reqVariables = { variables: {id: location.param1}}
  const { loading, error, data } = useQuery(GET_JOB, reqVariables)

  const [jobDetails, setJobDetails] = useState({})
  const [company, setCompany] = useState({})
  const [formattedUrl, setFormattedUrl] = useState('')

  //ON FETCH RESULT, EXTRACT JOB AND SET STATES
  useEffect(() => {
    if (data) {
      const { job } = data
      setJobDetails(job[0])
      setCompany(job[0].companyByCompany)
    }
  }, [data])

  const applyHandler = () => {
    showApplyPortal(jobDetails)
  }

  if (loading) {
  return <div className="beat-loader">
      <BeatLoader size={40} color={'#CDCDCD'}/>
    </div>
  }

  if (error) {
    return <Alert message={error.message}></Alert>
  }

  return (
    <>
    <div className='jobdetail-container'>
      <DetailHeader company={company} setFormattedUrl={setFormattedUrl} location={location} formattedUrl={formattedUrl}/>

      <div className='jobdetail-info'>
          <section className='jobdetail-top'>
            <div className='jobdetail-title'>
              <div className='jobdetail-title-posted'>
                <p>{jobDetails.postedAt} &bull; {jobDetails.contract}</p>
              </div>
              <h3>{jobDetails.position}</h3>
              <p>{company.companyLocation}</p>
            </div>
            <div className='jobdetail-apply'>
              <button className='btn btn-1' onClick={applyHandler}>Apply Now!</button>
            </div>
          </section>
          <section className='jobDetail-requirements'>
            <p>{jobDetails.description}</p>
            {jobDetails.requirementsContent ? 
              <div className='jobDetail-list-requirements'>
              <h3>Requirements</h3>
                <p>{jobDetails.requirementsContent}</p>
                <ul>   
                {jobDetails.requirementsItems.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
              </div> : null}
            {jobDetails.roleContent ? 
            <div className='jobDetail-list-content'>
            <h3>What You Will Do</h3>
              <p>{jobDetails.roleContent}</p>
              <ul>
                {jobDetails.roleContentItems.map((item, index) => (<li key={index}>{item}</li>))}
              </ul>
            </div> : null}
          </section>
      </div>
    </div>
      <DetailFooter jobDetails={jobDetails} company={company} applyHandler={applyHandler}/>
    </>
  )
}

export default JobDetail