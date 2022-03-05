import React from "react";
import classes from "./movieStyle.scss";
import { MovieEntity } from "../model";

interface Props {
  movie: MovieEntity;
}

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const IMG_DEFAULT =
  "https://lh3.googleusercontent.com/proxy/AtCMMHyDVry5_kLKjbFolI0mtcxSYE0T2XWbGpXFH9_arRUa7KV0mGcHDUbI3swpE7rz_sY8m_2bIiNJoljar5VGqPW06CJ2DO1DSR1cbI_k7Zb9sArL8k11I_4EusVH";

const setVoteClass = (vote) => {
  if (vote >= 8) return "green";
  if (vote >= 6) return "orange";
  return "red";
};

export const Movie: React.FC<Props> = (props) => {
  const { movie } = props;
  console.log(movie);
  return (
    <div className={classes.movie}>
      <img
        src={movie.poster_path ? IMG_API + movie.poster_path : IMG_DEFAULT}
        alt={movie.title}
      />
      <div className={classes.movieInfo}>
        <h3>{movie.title}</h3>
        <span className={`tag ${setVoteClass(movie.vote_average)}`}>
          {movie.vote_average}
        </span>
      </div>
      <div className={classes.movieOver}>
        <h2>Overview:</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};
