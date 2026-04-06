import styles from "./sliderOverflowCard.module.css";
import type { MediaItem } from "../../../types/MediaItem";
import isMovie from "../../../types/MediaItem";
import RatingIcon from "../../../icons/RatingIcon";
import PlayIcon from "../../../icons/PlayIcon";
import useFetchGenres from "../../../hooks/useFetchGenres";
import { useNavigate } from "react-router-dom";
import useFetchDetails from "../../../hooks/useFetchDetails";

interface ISliderOverflowCard {
  item: MediaItem;
}

function SliderOverflowCard({ item }: ISliderOverflowCard) {
  const mediaType = isMovie(item) ? "movie" : "tv";

  const { details } = useFetchDetails({ type: mediaType, id: item.id });
  const { genres } = useFetchGenres(isMovie(item) ? "movie" : "tv");

  const navigate = useNavigate();

  const title = isMovie(item) ? item.title : item.name;

  const rawDate = isMovie(item) ? item.release_date : item.first_air_date;

  const formatDate = (dateString: string) => {
    if (!dateString) return "";

    // Adicionamos 'T12:00:00' para evitar que o fuso horário mude o dia
    const dateObj = new Date(dateString + "T12:00:00");

    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const month = dateObj.toLocaleString("en-GB", { month: "long" });

    return `${day}, ${month}, ${year}`;
  };

  const formattedDate = formatDate(rawDate);

  const languageNames = new Intl.DisplayNames(["en"], { type: "language" });
  const fullLanguage =
    languageNames.of(item.original_language) || item.original_language;

  const formatRuntime = () => {
    if (!details) return "Loading...";

    const time = isMovie(item)
      ? details.runtime
      : details.episode_run_time?.[0];

    if (!time) return "N/A";

    const hours = Math.floor(time / 60);
    const minutes = time % 60;

    return hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`;
  };

  return (
    <div>
      <div
        className={styles.sliderCard}
        onClick={() => navigate(`/details/movie/${item.id}`)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
          alt={title}
        />
        <div className={styles.movieInfo}>
          <div className={styles.upper}>
            <div className={styles.upperLeft}>
              <h1 className={styles.contentTitle}>{title}</h1>
              <span className={styles.contentDetails}>
                {item.genre_ids
                  .map((id) => genres.find((item) => item.id === id)?.name)
                  .join(", ")}
              </span>
              <span className={styles.contentDetails}>{formattedDate}</span>
            </div>
            <div className={styles.upperRight}>
              <RatingIcon type="full" />
              <span>{(item.vote_average / 2).toFixed(1)}</span>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              <span>
                {formatRuntime()}, {fullLanguage}
              </span>
            </div>
            <div className={styles.bottomRight}>
              <PlayIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderOverflowCard;
