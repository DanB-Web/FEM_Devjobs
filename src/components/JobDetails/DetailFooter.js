import '../../styles/jobdetailfooter.scss'

export const DetailFooter = ({jobDetails, company}) => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-info'>
          <h3>{jobDetails.position}</h3>
          <p>{company.companyName}</p>
        </div>
        <div className='footer-button'>
          <button className='btn btn-1'>Apply Now!</button>
        </div>
      </div>
    </footer>
  )
}

export default DetailFooter