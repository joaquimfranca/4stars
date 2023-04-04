import "./favorites.css";
import { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const minhalista = localStorage.getItem("saved");
    setMovies(JSON.parse(minhalista) || []);
  }, []);

  function excluirfilme(id) {
    let moviefilter = movies.filter((item) => {
      return item.id !== id;
    });
    setMovies(moviefilter);
    localStorage.setItem("saved", JSON.stringify(moviefilter));
  }

  return (
    <div className="my-movies">
      {movies.length === 0 && <h1> You don't have any movies save :( </h1>}
      <ul>
        {movies.map((item) => {
          return (
            <li className="img" key={item.id}>
              <img
                src={`http://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt={item.title}
              />
              <span> {item.title}</span>

              <div>
                <Link to={`/movie/${item.id}`}> details </Link>
                <button onClick={() => excluirfilme(item.id)}> Delete </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorites;
