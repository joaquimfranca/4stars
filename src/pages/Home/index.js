import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";
import welcome from "../Home/welcome.cover.png";
import star from "../Home/star.png";

// /movie/now_playing?api_key=c675d03d9d4695c83b6198fcca873868&language=en-US

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "c675d03d9d4695c83b6198fcca873868",
          language: "en-US",
          page: 1,
        },
      });

      setMovies(response.data.results.slice(0, 20));
    }
    loadMovies();
  }, []);

  return (
    <>
      <div className="welcome">
        <img src={welcome} />
      </div>

      <div className="movie-list">
        {movies.map((movies) => {
          return (
            <div key={movies.id}>
              <Link to={`movie/${movies.id}`}>
                <img
                  src={`http://image.tmdb.org/t/p/original/${movies.poster_path}`}
                  alt={movies.title}
                />
              </Link>
              <Link to={`movie/${movies.id}`}>
                <h1> {movies.title}</h1>

                <h2 className="vote">
                  {" "}
                  <img src={star} />
                  {movies.vote_average.toFixed(1)}
                </h2>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
