import { useEffect, useState } from "react";

interface IGenres {
  id: number;
  name: string;
}

function useFetchGenres(type: "movie" | "tv") {
  const [genres, SetGenres] = useState<IGenres[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/${type}/list`,
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

      SetGenres(data.genres);

      console.log("Genres Data:", data.genres);
    };

    fetchData();
  }, [type]);

  return { genres };
}

export default useFetchGenres;
