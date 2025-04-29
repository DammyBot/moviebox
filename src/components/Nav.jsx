import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

const Nav = ({ setURL, page, setKeyword, setPage }) => {
  function reset() {
    setURL(`https://api.themoviedb.org/3/movie/popular?api_key=bc5f58a1141e94b746f74a20c3800ee6&page=1`)
    page(1);
  }
  return (
    <div className='flex items-center justify-between gap-2 sticky top-0 left-0 bg-black z-20 text-white p-1' >
      <nav>
        <ul className='flex gap-2 items-center'>
          <li><Link to="/" onClick={reset} className='moviebox'>Movie box</Link></li>
          <li><Link to="/genre">Genre</Link></li>
        </ul>
      </nav>
      <Search setUrl={setURL} setKeyword={setKeyword} setPage={setPage} />
    </div>
  )
}

export default Nav
