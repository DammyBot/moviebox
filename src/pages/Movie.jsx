import React from 'react'

const Movie = ({ info }) => {
    // backdrop_path, original_title, poster_path, release_date, vote_average, overview
    const imageurl = `https://image.tmdb.org/t/p/original/${info.poster_path}`;
    return (
        <div className='text-white flex flex-col sm:flex-row gap-5 items-center justify-center'>
            <div className='relative'>
                <img src={imageurl} alt={info.original_title} className='w-[150px] m-auto hover:brightness-50 transition duration-300 ease-in-out cursor-pointer ml-1' />
            </div>
            <div className=''>
                <p className='text-center font-bold font-[Montserrat] text-3xl'>{info.title}</p>
                {/* <p className='text-center'>Released {info.release_date}</p> */}
                {/* <p className='text-center'>Rating: {info.vote_average}</p> */}
                <p className='max-w-[95vw] m-auto font-[200] px-1'>{info.overview}</p>
            </div>
        </div>
    )
}

export default Movie