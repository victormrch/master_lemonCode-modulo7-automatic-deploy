import React from "react";
import { MovieEntity } from "./model";
import { Movie } from "./components/Movie";
import { logo } from "./assets/index";

const FEATURE_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b766db798e47fc73c4d5e4e0e718c2d2&page1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=b766db798e47fc73c4d5e4e0e718c2d2&query=";

const userName: String = "Victor";

export const App = () => {
  const [movies, setMovies] = React.useState<MovieEntity[]>([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  const getMovies = (API: string) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  React.useEffect(() => {
    getMovies(FEATURE_API);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <img className="logo" src={logo} alt="icono" />
        <h2>Welcome {userName} to BlockBuster!</h2>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};
