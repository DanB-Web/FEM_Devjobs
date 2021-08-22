import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_APPLICANT } from '../../graphql/ADD_APPLICANT'
import { BeatLoader } from 'react-spinners';
import '../../styles/applyjob.scss'

const ApplyJob = ({job}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [position] = useState(job.position)
  const [company] = useState(job.companyByCompany.companyName)

  const [addApplicant, {data, loading, error}] = useMutation(ADD_APPLICANT)

  const formHandler = (e) => {
    const id = e.target.id
    if (id === 'name') setName(e.target.value)
    if (id === 'email') setEmail(e.target.value)
  }

  const applyHandler = (e) => {
    e.preventDefault()
    const job = position
    addApplicant({variables: {job, company, name, email}})
    setName('')
    setEmail('')
  }

  if (loading) return (
    <div className='apply-container'>
      <BeatLoader size={40} color={'#CDCDCD'}/>
    </div>
  )

  if (error) return (
    <div className='apply-container'>
      <p>Something went wrong...</p>
    </div>
  )

  if (data) return (
    <div className='apply-container'>
      <p>You have successfully applied for {position} @ {company}!</p>
    </div>
  )

  return (
    <div className='applyjob-container-form'>
      <h2>{job.position}</h2>
      <h3>@{company}</h3>
      <p className='apply-text'>Please enter your details to apply!</p>
      <form onSubmit={applyHandler}>
        <label>Name:</label>
        <input 
          value={name}
          id='name'
          onChange={formHandler}
          type='text' 
          placeholder='Please enter your name'
          required
          ></input>
         <label>Email:</label> 
        <input 
          value={email}
          id='email'
          onChange={formHandler}
          type='email' 
          placeholder='Please enter your email'
          required
          ></input>
          <button className='btn btn-1' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ApplyJob