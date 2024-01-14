// import './App.css'
import { Link } from 'react-router-dom';
import './blog.css'

const articles_23 = [
  {
    'url' : 'https://dev.to/crvanetten15/set-up-vs-code-as-your-ssh-client-7nc',
    'title' : 'Set up VS Code as your SSH Client'
  },
  {
    'url' :  'https://dev.to/crvanetten15/ternary-operators-in-under-200-words-2e6l',
    'title' : 'Ternary Operators in under 200 words!'
  },
  {
    'url' :  'https://dev.to/crvanetten15/macos-terminal-and-alternatives-4e59',
    'title' : 'MacOS Terminal and Alternatives'
  },
  {
    'url' :  'https://dev.to/crvanetten15/find-users-who-dont-follow-you-back-with-python-451k',
    'title' : "Find Instagram Users Who Don't Follow You Back With Python"
  },
  {
    'url' :  'https://dev.to/crvanetten15/are-you-using-vs-code-shortcuts-592b',
    'title' : "Are you using VS Code Shortcuts?"
  },
  {
    'url' :  'https://dev.to/crvanetten15/lambda-functions-in-python-explained-4a91',
    'title' : "Lambda Functions in Python Explained"
  },
  {
    'url' :  'https://dev.to/crvanetten15/how-to-center-a-every-time-43ki',
    'title' : "How to center a <div> every time!"
  },
  {
    'url' :  'https://dev.to/crvanetten15/how-to-use-keyword-arguments-in-python-gcl',
    'title' : "How to use Keyword Arguments in Python"
  },
  {
    'url' :  'https://dev.to/crvanetten15/starter-project-idea-conways-game-of-life-1jfi',
    'title' : "Starter Project Idea: Conway's Game of Life"
  }
  // ,
  // {
  //   'url' :  '',
  //   'title' : "How to center a <div> every time!"
  // }
]

const articles_24 = [
  {
    'url' : '#',
    'title' : 'work in progress...'
  }
]

function Blog() {

  return (
    <div id='text-page'>
      <div>
        <Link to="/" className='hover:text-emerald-300 text-3xl'>cd . .</Link>
      </div>
        <p>
          Currently, I host of all my writing on <a href="https://dev.to/" className='hover:text-emerald-300' >dev.to</a> or <a href="https://medium.com/" className='hover:text-emerald-300'>medium.com</a>. Feel free to browse my links and see what I&#39;ve written.
        </p>
        <p>
          Coming 2024... all blogs will be localized to this website!
        </p>
        <h2>
          2024
        </h2>
        <ul className='text-list'>
        {articles_24.map(article => (
          <li key={article.url}>
            <a href={article.url} className='hover:text-emerald-300'>{article.title}</a>
          </li>
        ))}
        </ul>
        <h2>
          2023
        </h2>
        <ul className='text-list'>
        {articles_23.map(article => (
          <li key={article.url}>
            <a href={article.url} className='hover:text-emerald-300'>{article.title}</a>
          </li>
        ))}
        </ul>
    </div>
  )
}

export default Blog
