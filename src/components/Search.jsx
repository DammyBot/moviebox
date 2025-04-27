import { useState } from "react"
import React from 'react'
import { Link } from "react-router-dom";
import search from "../images/search.svg";

const Search = ({ setUrl, setKeyword, setPage }) => {
    const [input, setInput] = useState("");
    const updateURL = (e) => {
        if (input != "") {
            setPage(1)
            setKeyword(() => {
                return input;
            })
            setUrl(`https://api.themoviedb.org/3/search/movie?api_key=bc5f58a1141e94b746f74a20c3800ee6&query=${input}`);
            setInput("");
        } else {
            e.preventDefault();
        }
    }
    return (
        <div className="flex gap-2">
            <input type="text" placeholder='Search' value={input} className='bg-white text-black rounded-full pl-1' onChange={(e) => { setInput(e.currentTarget.value) }} />
            <Link to="/moviesearch" onClick={updateURL}>
                <img src={search} alt="Search" className="w-6" />
            </Link>
            {/* <button onClick={updateURL}>Search</button> */}
        </div>
    )
}

export default Search
