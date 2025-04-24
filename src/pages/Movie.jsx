import React from 'react'

const Movie = ({ info }) => {
    // backdrop_path, original_title, poster_path, release_date, vote_average, overview
    const imageurl = `https://image.tmdb.org/t/p/original/${info.poster_path}`;
    return (
        <div>
            <h1>{info.title}</h1>
            <img src={imageurl} alt={info.original_title} />
            <p>{info.release_date}</p>
            <p>{info.overview}</p>
            <p>Rating: {info.vote_average}</p>
        </div>
    )
}

export default Movie