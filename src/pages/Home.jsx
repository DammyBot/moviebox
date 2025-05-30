import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Change from '../components/Change'

const Home = ({ result, page, pageChange, total, setLoading, updateURL, setMovie, keyword }) => {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2 max-w-[95vw] m-auto'>
                {result.map((item, index) => {
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
            <Change page={page} pageChange={pageChange} total={total} updateURL={updateURL} nav={"home"} keyword={keyword} setLoading={setLoading}/>
        </>
    )
}

export default Home