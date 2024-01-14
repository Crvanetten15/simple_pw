import './Header.css'
import { Link } from 'react-router-dom';

function Header() {

  return (
    <>
      <div id='header'>
        <ul id='selections'>
          <li className='select-option'><Link to="/blog" className='hover:text-emerald-300'>text</Link></li>
          <li className='select-option'><Link to="/programs" className='hover:text-emerald-300'>programs</Link></li>
          <li className='select-option'><Link to="/connect" className='hover:text-emerald-300'>contact</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Header