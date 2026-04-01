import { useEffect, useState } from "react";
import type { IVideo, ICast, IDetails, IUseFetchDetails } from "../types/Details";

function useFetchDetails({ type, id }: IUseFetchDetails) {
  const [details, setDetails] = useState<IDetails>();
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [cast, setCast] = useState<ICast[]>([]);

  useEffect(() => {
    const fetchAll = async () => {
      const fetchOptions = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzRjM2ZlOWIyZGQ5YmQxNTQzYzhlZWRiYTU0ZTkzMSIsIm5iZiI6MTc0MjE1NzE2My4wMjksInN1YiI6IjY3ZDczNTZiMzE1MzhkZTYwOGYxYmFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g1NFgZQFkQCTa6A5ffKDJXyLcmnKxXKA2xoTRTViHcE",
        },
      };

      const [detailsResponse, videosResponse, creditsResponse] =
        await Promise.all([
          fetch(`https://api.themoviedb.org/3/${type}/${id}`, fetchOptions),
          fetch(
            `https://api.themoviedb.org/3/${type}/${id}/videos`,
            fetchOptions,
          ),
          fetch(
            `https://api.themoviedb.org/3/${type}/${id}/credits`,
            fetchOptions,
          ),
        ]);

      const detailsData = await detailsResponse.json();
      const videosData = await videosResponse.json();
      const creditsData = await creditsResponse.json();

      setDetails(detailsData);
      setVideos(videosData.results);
      setCast(creditsData.cast);

      console.log("Details:", detailsData);
      console.log("Videos:", videosData.results);
      console.log("Cast:", creditsData.cast);
    };

    fetchAll();
  }, [type, id]);

  return { details, videos, cast };
}

export default useFetchDetails;
