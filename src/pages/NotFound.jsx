import { Link } from 'react-router-dom';
import './not-found.css'
function NotFound() {
  return (
    <div id='not-found'>
      <div>
      <Link to="/" className='hover:text-emerald-300 text-3xl'>cd . .</Link>
      </div>
      So much empty...
    </div>
  );
}

export default NotFound