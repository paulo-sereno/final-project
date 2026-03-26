import { useEffect, useState } from "react";

interface ICategory {
  category: "movie" | "tv";
}

function usePopularCategory<T>({ category }: ICategory) {
  const [popularCategory, setPopularCategory] = useState<T[]>([]);

  console.log("Popular List:", popularCategory);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${category}/popular`,
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

      setPopularCategory(data.results);

      console.log("data", data.results);
    };

    fetchData();
  }, [category]);

  return { popularCategory };
}

export default usePopularCategory;
