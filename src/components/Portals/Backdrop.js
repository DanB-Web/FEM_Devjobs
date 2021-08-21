import React from 'react'
import { createPortal } from 'react-dom'
import ApplyJob from './ApplyJob'
import MobileFilter from './MobileFilter'
 import '../../styles/backdrop.scss'

const Backdrop = (props) => {

  //APPLY JOB PROPS
  const {viewApplyJob, setViewApplyJob, job, setJob} = props
  //MOBILE FILTER PROPS
  const {viewMobileFilter, setViewMobileFilter} = props
  
  const closePortalHandler = () => {
    if (viewApplyJob) {
      setViewApplyJob(false)
      setJob({})
    }  
    if (viewMobileFilter) {
      setViewMobileFilter(false)
    }
  }

  return createPortal(
    <div className="backdrop-container">
      <button className='btn btn-1 close-portal-btn' onClick={closePortalHandler}>CLOSE</button>
      <div className='backdrop-content'>
        {viewApplyJob ? <ApplyJob job={job}/> : null}
        {viewMobileFilter ? <MobileFilter/> : null}
      </div>
    </div>, document.getElementById('backdrop-hook')
  );
  
}

export default Backdrop
