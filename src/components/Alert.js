import { useHistory } from 'react-router-dom'
import '../styles/alert.scss'

const Alert = ({message}) => {

  const history = useHistory()

  const routeHandler = () => {
    history.push('/')
  }

  return (
    <div className='error-container'>
      <h2>Error:</h2>
      <p>{message}</p>
      <button className='btn btn-1' onClick={routeHandler}>Home</button>
    </div>
  )
}

export default Alert