import '../styles/jobtile.scss'

const JobTile = ({job}) => {

  const { companyName, companyLocation } = job.companyByCompany

  return (
    <div className='jobtile-container'>
      <p>{job.position}</p>
      <p>{companyName}</p>
      <p>{companyLocation}</p>
    </div>
  )
}

export default JobTile