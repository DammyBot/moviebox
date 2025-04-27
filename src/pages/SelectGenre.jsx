import React from 'react'
import { Link } from 'react-router-dom'

const Genre = ({ genre, setURL, setGenreID, setPage }) => {
  return (
    <>
      {genre.map((item, index) => {
        function setLink() {
          setGenreID(item.id);
          setPage(1);
          setURL(`https://api.themoviedb.org/3/discover/movie?api_key=bc5f58a1141e94b746f74a20c3800ee6&with_genres=${item.id}&page=1`)
        }
        return (
          <div key={index}>
            <Link to="/moviegenre" onClick={setLink}>{item.name}</Link>
          </div>
        )
      })}
    </>
  )
}

export default Genre