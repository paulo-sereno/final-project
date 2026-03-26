import { useEffect, useState } from "react";
import type { MediaItem as MediaItem } from "../types/MediaItem";

interface IUseFetchMedia {
  type: "movie" | "tv";
  category: string;
}

function useFetchMedia<T extends MediaItem>({
  type,
  category,
}: IUseFetchMedia) {
  const [results, setResults] = useState<T[]>([]);

  console.log("List:", results);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${category}`,
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

      setResults(data.results);

      console.log("data", data.results);
    };

    fetchData();
  }, [type, category]);

  return { results };
}

export default useFetchMedia;
