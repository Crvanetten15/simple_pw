
import './Home.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {

  return (
    <div id='main-page'>
      <h1 id='title-header'>
        Connor Van Etten
      </h1>
        <blockquote>
        Simplicity is prerequisite for reliability.
        <br />-Edsger Dijkstra
        </blockquote>
      <p>
        Hi, I am <b>Connor</b>, a <i>Software Developer</i>. I am on the evergoing pursuit to make ideas come to life through code. If you can think of it, I assure there is a path to it through modern technology, and I would like to aid you on that journey.
      </p>
      <p>
        Along side my development motives, I run a <a href="">simple blog</a>. If you are interested in the Cloud, the Web, coding in general or just what i think please navigate to the text tab above. 
      </p>
      <p>
        Outside of programming, I enjoy powerlifting and hiking. These help me achieve a balance between my digital life and my physical life. If you happen to share these extended hobbies feel free to contact me regarding them as well. 
      </p>
      <p>
        Enjoy some of my highlights below. If you would like to see more of my work, you can find my full projects list <a href="">here</a>. 
      </p>
      <table id='table-show'>
        <tr>
          <th className='th-head'>in-progress</th>
          <th className='th-head'>live-programs</th>
          <th className='th-head'>text-blog</th>
        </tr>
        <tr>
          <td>
            <a href="" className='link-head'>Progress ABL CLI</a>
            <p>CLI built in go to handle multiple versions of Progress ABL.</p>
          </td>
          <td>
            <a href="" className='link-head'>File Finder</a>
            <p>OpenSource File Explorer Alternative</p>
          </td>
          <td>
            <a href="" className='link-head'>SSH Client w/ VS Code</a>
            <p>How to init VSC as your SSH Client.</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <a href="" className='link-head'>PureFlow-CSS</a>
            <p>A flex based CSS Toolket to get your basic styling up and running. </p>
          </td>
          <td>
            <a href="" className='link-head'>name</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deleniti a inventore pariatur </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
          <a href="" className='link-head'>b-simpl</a>
            <p>grayscale VSC theme to keep the clutter of vs away.</p>
          </td>
          <td>
            <a href="" className='link-head'>name</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deleniti a inventore pariatur </p>
          </td>
        </tr>
      </table>
      <h3>Find me on</h3>
      <p>

      <a href="" className='bottom-links'><i className="fa fa-github"></i> github</a>
      <a href="" className='bottom-links'><i className="fa fa-youtube"></i> youtube</a> 
      <a href="" className='bottom-links'><i className="fa fa-twitter"></i>twitter</a> 
      <a href="" className='bottom-links'><i className="fa fa-discord"></i> discord</a> 
      </p>
      <h3>Connect</h3>
      <p>
        Reach me at <a href="https://twitter.com/ettensoftware">@ettensoftware</a> or <a href="https://www.linkedin.com/in/crvanetten/">linkedin/connorvanetten</a>.
      </p>

    </div>
  )
}

export default Home
