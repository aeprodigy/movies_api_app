import { useEffect, useState } from "react";
import "./App.css";
import MovieBox from "./MovieBox";
import Navbar from "./Navbar";
//import statements are above this line.

//The Api KEY
const api_url =
  "https://api.themoviedb.org/3/tv/popular?api_key=d1953035983de84ee5c65ab3bbe7c0bf&query";

function App() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data.results);
      });
  }, []);
  return (
    <div className="">
      <Navbar className="navbar" />
      <div className="container">
        {movie.map((movieReq) => (
          <MovieBox key={movieReq.id} {...movieReq} />
        ))}
      </div>
    </div>
  );
}

export default App;
