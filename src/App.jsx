import { Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import logo from './images/react.svg'
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Movie from "./pages/Movie"
import Top from "./components/Top"
import SelectGenre from "./pages/SelectGenre"
import Genre from "./pages/Genre"
import MovieSearch from "./pages/MovieSearch"

function App() {
  // original_title, title, release_date, overview, poster_path, backdrop_path
  const API_KEY = `bc5f58a1141e94b746f74a20c3800ee6`;
  const [endpoint, setEndpoint] = useState("movie/popular")
  // Page information
  const [page, setPage] = useState(1);
  const totalPages = 500;
  //Result for movie page
  const [movie, setMovieInfo] = useState({});
  //Home Page Result
  const [results, setResults] = useState([]);
  //All Genre list for SelectGenre Page
  const [genre, setGenre] = useState([]);
  // First URL to display movies in home page
  const [url, setURL] = useState(`https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&page=${page}`);
  // Search keyword
  const [keyword, setKeyword] = useState("")
  // Genre ID
  const [genreID, setGenreID] = useState("");

  useEffect(() => {
    // Setting the movie after fetch
    fetch(url)
      .then(res => res.json())
      .then(res => {console.info(res);setResults(res.results)})
      .catch(err => console.error(err));

    // Setting all the genre available into the genre list
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(res => (setGenre(res.genres)))
      .catch(e => console.error(e));
  }, [url, page])

  return (
    <>
      <Nav setURL={setURL} page={setPage} keyword={keyword} setKeyword={setKeyword} setPage={setPage} />

      <Routes>
        <Route path="/" element={<Home result={results} page={page} pageChange={setPage} total={totalPages} updateURL={setURL} setMovie={setMovieInfo} url={url} keyword={keyword} />} />

        <Route path="/movie" element={<Movie info={movie} />} />

        <Route path="/genre" element={<SelectGenre genre={genre} setURL={setURL} page={page} setPage={setPage} setGenreID={setGenreID} />} />

        <Route path="/moviegenre" element={<Genre page={page} updateURL={setURL} setPage={setPage} total={totalPages} genreID={genreID} result={results} setMovie={setMovieInfo} />} />

        <Route path="/moviesearch" element={<MovieSearch page={page} pageChange={setPage} results={results} total={totalPages} updateURL={setURL} setMovie={setMovieInfo} keyword={keyword} />} />
      </Routes>

      <Top />
    </>
  )
}

export default App
