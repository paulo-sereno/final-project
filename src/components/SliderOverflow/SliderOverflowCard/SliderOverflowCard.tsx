import { useEffect, useState } from "react";
import styles from "./sliderOverflowCard.module.css";
import type { IPopularMovies } from "../../../types/PopularMovies";
import RatingIcon from "../../../icons/RatingIcon";

function SliderOverflowCard() {
  const [popularMovies, setPopularMovies] = useState<IPopularMovies[]>([]);

  console.log("Popular Movies:", popularMovies);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzRjM2ZlOWIyZGQ5YmQxNTQzYzhlZWRiYTU0ZTkzMSIsIm5iZiI6MTc0MjE1NzE2My4wMjksInN1YiI6IjY3ZDczNTZiMzE1MzhkZTYwOGYxYmFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g1NFgZQFkQCTa6A5ffKDJXyLcmnKxXKA2xoTRTViHcE",
          },
        },
      );

      const data = await response.json();

      setPopularMovies(data.results);

      console.log("data", data.results);
    };

    fetchData();
  }, []);

  return (
    <div>
      {popularMovies?.map((movie) => (
        <div className={styles.sliderCard} key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt=""
          />
          <div className={styles.movieInfo}>
            <div className="upper">
              <div className="upperLeft">
                <h1 className="contentTitle">{movie.title}</h1>
                <span className="contentDetails">
                  {movie.genre_ids.join(", ")}
                </span>
                <span className="contentDetails">{movie.release_date}</span>
              </div>
              <div className="upperRight">
                <RatingIcon />
                <span>{(movie.vote_average / 2).toFixed(1)}</span>
              </div>
            </div>
            <div className="bottom">
              <div className="bottomLeft">
                <span>1h 30min, {movie.original_language}</span>
              </div>
              <div className="bottomRight">
                <button className="videoBtn">PLAY ICON</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SliderOverflowCard;
