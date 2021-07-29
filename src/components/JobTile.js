import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/jobtile.scss'

const JobTile = ({job}) => {

  const [iconUrl, setIconUrl] = useState(false)

  const { companyName, companyLocation } = job.companyByCompany

  const jobDetails = {
    pathname: '/job',
    param1: job.id
  }

  useEffect(() => {
    iconFetch(companyName.toLowerCase().replace(/\s+/g, ''))
  }, [companyName])

  const iconFetch = async (iconName) => {
    await import(`../assets/logos/${iconName}.svg`)
    .then(data => setIconUrl(data.default))
    .catch(err => console.log(err))
  }

  return (
    <div className='jobtile-container'>
      <Link to={jobDetails}>
        {iconUrl && <img src={iconUrl} alt={`${companyName} svg`}/>}
        <h3>{job.position}</h3>
        <p>{companyName}</p>
        <p>{companyLocation}</p>
      </Link> 
    </div>
  )
}

export default JobTile