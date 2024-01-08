import './Header.css'
import { Link } from 'react-router-dom';

function Header() {

  return (
    <>
      <div id='header'>
        <ul id='selections'>
          <li className='select-option'><Link to="/blog">text</Link></li>
          <li className='select-option'><Link to="/programs">programs</Link></li>
          <li className='select-option'><Link to="/connect">contact</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Header