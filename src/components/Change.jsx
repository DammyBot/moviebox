import React from 'react'
import { Link } from 'react-router-dom';

const Change = ({ page, pageChange, total, updateURL, nav, keyword, genreID, setLoading }) => {
    let url;

    function change(value, no) {
        setLoading(true);
        let updatedPage;
        const changeURL = () => {
            if (nav == "home") {
                url = `https://api.themoviedb.org/3/movie/popular?api_key=bc5f58a1141e94b746f74a20c3800ee6&page=${updatedPage}`;
            } else if (nav == "search") {
                url = `https://api.themoviedb.org/3/search/movie?api_key=bc5f58a1141e94b746f74a20c3800ee6&query=${keyword}&page=${updatedPage}`
            } else if (nav == "genre") {
                url = `https://api.themoviedb.org/3/discover/movie?api_key=bc5f58a1141e94b746f74a20c3800ee6&with_genres=${genreID}&page=${updatedPage}`
            }
        }
        const change = (prev, no, value) => {
            if (value === "+") {
                updatedPage = prev + no;
            } else if (value === "-") {
                updatedPage = prev - no;
            }
        }
        if (value === "+" & no == 1) {
            if (page + 1 <= total) {
                pageChange((prevPage) => {
                    // updatedPage = prevPage + 1;
                    change(prevPage, no, value);
                    changeURL();
                    updateURL(url);
                    return updatedPage;
                });
            }
        } else if (value === "-" & no == 1) {
            if ((page - 1) > 0) {
                pageChange((prevPage) => {
                    // updatedPage = prevPage - 1;
                    change(prevPage, no, value);
                    changeURL();
                    updateURL(url);
                    return updatedPage;
                });
            }
        } else if (value === "-" & no == 5) {
            if ((page - 5) > 0) {
                pageChange((prevPage) => {
                    // updatedPage = prevPage - 1;
                    change(prevPage, no, value);
                    // console.info(prevPage)
                    changeURL();
                    updateURL(url);
                    return updatedPage;
                });
            } else {
                pageChange(() => {
                    updatedPage = 1;
                    changeURL();
                    updateURL(url);
                    return updatedPage;
                });
            }
        } else if (value === "+" & no == 5) {
            if ((page + 5) <= total) {
                pageChange((prevPage) => {
                    change(prevPage, no, value);
                    // console.info(prevPage)
                    changeURL();
                    updateURL(url);
                    return updatedPage;
                });
            }
        }
    }

    return (
        <div className='flex justify-center items-center gap-5 text-white'>
            <Link to={nav === "home" ? "/" : "/moviesearch"} onClick={() => { change("-", 5) }}>-5</Link>
            <Link to={nav === "home" ? "/" : "/moviesearch"} onClick={() => { change("-", 1) }}>Previous</Link>
            <p>{page}</p>
            <Link to={nav === "home" ? "/" : "/moviesearch"} onClick={() => { change("+", 1) }}>Next</Link>
            <Link to={nav === "home" ? "/" : "/moviesearch"} onClick={() => { change("+", 5) }}>+5</Link>
        </div>
    )
}

export default Change
