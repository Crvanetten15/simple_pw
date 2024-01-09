// import './App.css'
import { Link } from 'react-router-dom';
import './program.css'

function Programs() {

  return (
    <>
      <div id='program-page'>
      <div>
        <Link to="/">cd . .</Link>
      </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique in libero blanditiis sit! Iste, nisi. Commodi in sunt assumenda magni iure est rerum vitae impedit, at ratione dolore molestiae fuga.
        </p>
        <h2>2024</h2>
        <h3>
          January
        </h3>
        <ul className='proj-list'>
          <li>Project 1</li>
          <li>Project 2</li>
        </ul>
        <h3>
          February
        </h3>
        <ul className='proj-list'>
          <li>Project 1</li>
          <li>Project 2</li>
        </ul>
      </div>
    </>
  )
}

export default Programs
