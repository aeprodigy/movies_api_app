import React from "react";
import "./MovieBox.css";
const api_img = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({
  title,
  name,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  return (
    <div className="container">
      <h3>{name}</h3>
      <img src={api_img + poster_path} alt=""></img>
      <p>{overview}</p>
      <h6>{vote_average}Votes</h6>
    </div>
  );
};

export default MovieBox;
