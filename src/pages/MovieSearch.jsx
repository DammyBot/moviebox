import React from 'react'
import { Link } from 'react-router-dom'
import Change from '../components/Change'
import Card from '../components/Card'

const MovieSearch = ({results, updateURL, page, pageChange, total, setMovie, keyword}) => {
    return (
        <>
            <div>
                {results.map((item, index)=>{
                    const imageurl = `https://image.tmdb.org/t/p/original/${item.backdrop_path}`;
                    function updateMovie() {
                        setMovie(item);
                    }
                    return (
                        <Link to="/movie" key={index} onClick={updateMovie}>
                            <Card title={item.title} releasedate={item.release_date} image={imageurl} />
                        </Link>
                    )
                })}
            </div>
            <Change page={page} pageChange={pageChange} total={total} updateURL={updateURL} nav={"search"} keyword={keyword}/>
        </>
    )
}

export default MovieSearch
