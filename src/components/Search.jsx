import { useState } from "react"
import React from 'react'
import { Link } from "react-router-dom";

const Search = ({ setUrl, setKeyword, setPage }) => {
    const [input, setInput] = useState("");
    const updateURL = (e) => {
        if (input != "") {
            setPage(1)
            setKeyword(() => {
                console.info(input);
                return input;
            })
            setUrl(`https://api.themoviedb.org/3/search/movie?api_key=bc5f58a1141e94b746f74a20c3800ee6&query=${input}`);
            setInput("");
        } else {
            e.preventDefault();
        }
    }
    return (
        <div>
            <input type="text" placeholder='Search' value={input} className='' onChange={(e) => { setInput(e.currentTarget.value) }} />
            <Link to="/moviesearch" onClick={updateURL}>Search</Link>
            {/* <button onClick={updateURL}>Search</button> */}
        </div>
    )
}

export default Search
