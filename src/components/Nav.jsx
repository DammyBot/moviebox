import React from 'react'
import { useState } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import hamburger from '../images/hamburger.svg'
import close from '../images/close.svg'

const Nav = ({ setURL, page, setKeyword, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  function reset() {
    setURL(`https://api.themoviedb.org/3/movie/popular?api_key=bc5f58a1141e94b746f74a20c3800ee6&page=1`)
    page(1);
  }
  function show() {
    setIsOpen(!isOpen);
  }
  return (
    <div className='sticky top-0 left-0 bg-black z-20 text-white p-1'>
        <div className='flex items-center justify-between gap-2' >
          <nav>
            <ul className='flex gap-2 items-center'>
              <li><Link to="/" onClick={reset} className='moviebox'>Movie box</Link></li>
            </ul>
          </nav>
          <button className='cursor-pointer w-8 sm:hidden transition-all'><img src={isOpen ? close : hamburger} alt="Hamburger" className='w-full' onClick={show} /></button>
          <div className='hidden gap-5 items-center sm:flex'>
            <li><Link to="/genre" className=''>Genre</Link></li>
            <Search setUrl={setURL} setKeyword={setKeyword} setPage={setPage} />
          </div>
        </div>
        <div className='hidden gap-5 items-center justify-end py-2 px-.5' style={{ display: isOpen ? 'flex' : 'none' }}>
          <li><Link to="/genre" className=''>Genre</Link></li>
          <Search setUrl={setURL} setKeyword={setKeyword} setPage={setPage} />
        </div>
    </div>
  )
}

export default Nav
