import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function Test() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && ( <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
        >
<div id='main-page'>
      <h1 id='title-header' className='text-3xl'>
        Connor Van Etten
      </h1>
        <blockquote>
        Simplicity is prerequisite for reliability.
        <br />-Edsger Dijkstra
        </blockquote>
        <br />
      <p>
        Hi, I am <b>Connor</b>, a <i>Software Developer</i>. I am on the evergoing pursuit to make ideas come to life through code. If you can think of it, I assure there is a path to it through modern technology, and I would like to aid you on that journey.
      </p>
      <br />
      <p>
        Along side my development motives, I run a <a href="https://dev.to/crvanetten15" className='hover:text-emerald-300'>tech blog</a>. If you are interested in the Cloud, the Web, coding in general or just what I think please navigate to the text tab above. 
      </p>
      <br />
      <p>
        Outside of programming, I enjoy powerlifting and hiking. These help me achieve a balance between my digital life and my physical life. If you happen to share these extended hobbies feel free to contact me regarding them as well. 
      </p>
      <br />
      <p>
        Enjoy some of my highlights below. If you would like to see more of my work, you can find my full projects list <a href="" className='hover:text-emerald-300'>here</a>. 
      </p>
      <table id='table-show'>
        <tr>
          <th className='th-head'>in-progress</th>
          <th className='th-head'>live-programs</th>
          <th className='th-head'>text-blog</th>
        </tr>
        <tr>
          <td>
            <a href="" className='link-head hover:text-emerald-300'>Progress ABL CLI</a>
            <p>CLI built in go to handle multiple versions of Progress ABL.</p>
          </td>
          <td>
            <a href="" className='link-head hover:text-emerald-300'>File Finder</a>
            <p>OpenSource File Explorer Alternative</p>
          </td>
          <td>
            <a href="" className='link-head hover:text-emerald-300'>SSH Client w/ VS Code</a>
            <p>How to init VSC as your SSH Client.</p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td> 
            <a href="" className='link-head hover:text-emerald-300'>PureFlow-CSS</a>
            <p>A flex based CSS Toolket to get your basic styling up and running. </p>
          </td>
          <td>
            <a href="" className='link-head hover:text-emerald-300'>name</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deleniti a inventore pariatur </p>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
          <a href="" className='link-head hover:text-emerald-300'>b-simpl</a>
            <p>grayscale VSC theme to keep the clutter of vs away.</p>
          </td>
          <td>
            <a href="" className='link-head hover:text-emerald-300'>name</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deleniti a inventore pariatur </p>
          </td>
        </tr>
      </table>
      <h3>Find me on</h3>
      <p className='space-x-4'>

      <a href="https://github.com/Crvanetten15" className='bottom-links hover:text-emerald-300'><i className="fa fa-github"></i> github</a>
      {/* <a href="" className='bottom-links hover:text-emerald-300'><i className="fa fa-youtube"></i> youtube</a> 
      <a href="" className='bottom-links hover:text-emerald-300'><i className="fa fa-twitter"></i>twitter</a> 
      <a href="" className='bottom-links hover:text-emerald-300'><i className="fa fa-discord"></i> discord</a>  */}
      </p>
      <h3>Connect</h3>
      <p>
        Reach me at <a href="https://twitter.com/ettensoftware" className='hover:text-emerald-300'>@ettensoftware</a> or <a href="https://www.linkedin.com/in/crvanetten/" className='hover:text-emerald-300'>linkedin/connorvanetten</a>.
      </p>

    </div>











        </motion.div>)}
      </AnimatePresence>

      <button onClick={toggleVisibility}>
        Notify
      </button>
    </>
  )
}

export default Test