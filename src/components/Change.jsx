import React from 'react'
import { Link } from 'react-router-dom';

const Change = ({ page, pageChange, total, updateURL, nav, keyword }) => {
    let url;

    function decrease() {
        if ((page - 1) > 0) {
            pageChange((prevPage) => {
                const updatedPage = prevPage - 1;
                console.info(updatedPage);
                if (nav == "home") {
                    url = `https://api.themoviedb.org/3/movie/popular?api_key=bc5f58a1141e94b746f74a20c3800ee6&page=${updatedPage}`;
                } else if (nav == "search") {
                    url = `https://api.themoviedb.org/3/search/movie?api_key=bc5f58a1141e94b746f74a20c3800ee6&query=${keyword}&page=${updatedPage}`
                    // url = `https://api.themoviedb.org/3/movie/popular?api_key=bc5f58a1141e94b746f74a20c3800ee6&page=${updatedPage}`;
                }
                updateURL(url);
                return updatedPage;
            });
        }
    }
    function increase() {
        if (page + 1 <= total) {
            pageChange((prevPage) => {
                const updatedPage = prevPage + 1;
                console.info(updatedPage);
                if (nav == "home") {
                    url = `https://api.themoviedb.org/3/movie/popular?api_key=bc5f58a1141e94b746f74a20c3800ee6&page=${updatedPage}`;
                } else if (nav == "search") {
                    url = `https://api.themoviedb.org/3/search/movie?api_key=bc5f58a1141e94b746f74a20c3800ee6&query=${keyword}&page=${updatedPage}`
                    // url = `https://api.themoviedb.org/3/movie/popular?api_key=bc5f58a1141e94b746f74a20c3800ee6&page=${updatedPage}`;
                }
                updateURL(url);
                return updatedPage;
            });
        }
    }

    return (
        <div className='flex justify-center items-center gap-5'>
            <Link>-10</Link>
            <Link to={nav === "home" ? "/" : "/moviesearch"} onClick={() => { decrease() }}>Previous</Link>
            <p>{page}</p>
            <Link to={nav === "home" ? "/" : "/moviesearch"} onClick={() => { increase() }}>Next</Link>
            <Link>+10</Link>
        </div>
    )
}

export default Change
