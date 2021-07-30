import { useEffect } from 'react'
import '../../styles/jobdetailheader.scss'

const DetailHeader = ({ company, formattedUrl, setFormattedUrl, location}) => {

  useEffect(() => {
  if (company.companyName) {
    setFormattedUrl(company.companyName.toLowerCase().replace(/\s+/g, ''))
  }
  }, [company, setFormattedUrl])

  const openCompanySiteHandler = () => {
      window.open(company.companyWebsite, "_blank");
  }

  return (
    <div className='detailheader-container'>
        <div 
          className='detailheader-logo' 
          style={{backgroundColor: company.companyColor}}>
          <img src={location.param2} alt='company icon'/>
        </div>
        <div className='detailheader-details'>
          <h3>{company.companyName}</h3>
          <a  href={`${company.companyWebsite}`} 
              target='_blank' 
              rel="noreferrer">
              {company.companyName ? formattedUrl : 'example'}.com
              </a>
        </div> 
        <div className='detailheader-sitelink'>
          <button  className='btn btn-2'
                   onClick={openCompanySiteHandler}
                    >Company Site</button>
        </div>    
      </div>
  )
}

export default DetailHeader