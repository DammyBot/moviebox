import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Change from '../components/Change'

const Genre = ({ page, updateURL, genre, setGenreURL, genreURL, setGenreResult, genreResult }) => {
    useEffect(() => {
        fetch(genreURL)
            .then(res => res.json())
            .then(res => (console.info(res)))
            // .then(res => (setGenreResult(res)))
            .catch(err => (console.info(err)));
    }, [])
    return (
        <div>
            {/* {genreResult.results.map((item, index) => {
                return (
                    <div key={index}><h1>{item.title}</h1></div>
                )
            })} */}
        </div>
    )
}

export default Genre
