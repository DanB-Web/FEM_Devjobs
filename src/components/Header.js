import Switch from 'react-switch'
import { ReactComponent as Sun} from '../assets/desktop/icon-sun.svg'
import { ReactComponent as Moon} from '../assets/desktop/icon-moon.svg'
import '../styles/header.scss'

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className='header-container'>
      <div className='header-content'>
      <h1>devjobs</h1>
      <label>
          <Sun/>
          <Switch 
            className='mode-switch'
            onChange={toggleDarkMode} 
            checked={darkMode}
            height={16}
            width={30}
            offColor={'#fff'}
            onColor={'#fff'}
            offHandleColor={'#5964e0'}
            onHandleColor={'#5964e0'} />
          <Moon/>
        </label>
      </div>
    </div>
  )
}

export default Header