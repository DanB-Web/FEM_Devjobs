import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/jobtile.scss'

const JobTile = ({job}) => {

  const [iconUrl, setIconUrl] = useState(false)

  const { companyName, companyLocation, companyColor } = job.companyByCompany

  const jobDetails = {
    pathname: '/job',
    param1: job.id,
    param2: iconUrl
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
        <div className='icon-background' style={{backgroundColor: companyColor}}>
          {iconUrl && <img src={iconUrl} alt={`${companyName} svg`}/>}
        </div>
        <div className='jobtile-details'>
          <span>{job.postedAt} &bull; {job.contract}</span>    
          <h3>{job.position}</h3>
          <p>{companyName}</p>
        </div>
        <div className='jobtile-location'>
          <p>{companyLocation}</p>
        </div>    
      </Link> 
    </div>
  )
}

export default JobTile