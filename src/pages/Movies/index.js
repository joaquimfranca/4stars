import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movie.info.css";
import api from "../../services/api";

export default function Movies() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData1() {
      try {
        const response = await api.get(`/movie/${id}`, {
          params: {
            api_key: "c675d03d9d4695c83b6198fcca873868",
            language: "en-Us",
          },
        });
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData1();
  }, []);

  useEffect(() => {
    async function fetchData2() {
      const response = await api.get(`/movie/${id}/videos`, {
        params: {
          api_key: "c675d03d9d4695c83b6198fcca873868",
          language: "en-US",
        },
      });

      setTrailer(response.data.results[0]);
    }
    fetchData2();
  }, [id]);

  function Savemovie() {
    const mylist = localStorage.getItem("saved");
    let savedmovies = JSON.parse(mylist) || [];

    const hasfilme = savedmovies.some(
      (savedmovies) => savedmovies.id === movie.id
    );

    if (hasfilme) {
      alert("This movie is already on the list!");
      return;
    }

    savedmovies.push(movie);
    localStorage.setItem("saved", JSON.stringify(savedmovies));
    alert("Successfully saved movie!");
  }

  if (loading) {
    return (
      <div className="movie-info">
        <h1> Loading... </h1>
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <img
          src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          className="backdrop-img"
        />
        <img
          src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
          className="poster-img"
        />

        <div className="text-info">
          <h3 className="title">{movie.title}</h3>
          <h4> Release Date({movie.release_date})</h4>
          <p>synopsis</p>
          <span>{movie.overview}</span>
          <h5> Vote Average:{movie.vote_average.toFixed(1)}0</h5>

          <iframe
            className="youtube"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
          <div className="button">
            <button className="button-plus" onClick={Savemovie}>
              save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
