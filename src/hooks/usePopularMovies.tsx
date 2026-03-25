import { useEffect, useState } from "react";
import type { IPopularMovies } from "../types/PopularMovies";

function usePopularMovies() {
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

  return { popularMovies };
}

export default usePopularMovies;
