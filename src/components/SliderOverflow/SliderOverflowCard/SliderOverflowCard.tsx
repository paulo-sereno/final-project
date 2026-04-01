import styles from "./sliderOverflowCard.module.css";
import type { MediaItem } from "../../../types/MediaItem";
import isMovie from "../../../types/MediaItem";
import RatingIcon from "../../../icons/RatingIcon";
import PlayIcon from "../../../icons/PlayIcon";
import useFetchGenres from "../../../hooks/useFetchGenres";
import { useNavigate } from "react-router-dom";

interface ISliderOverflowCard {
  item: MediaItem;
}

function SliderOverflowCard({ item }: ISliderOverflowCard) {
  const title = isMovie(item) ? item.title : item.name;
  const date = isMovie(item) ? item.release_date : item.first_air_date;

  const { genres } = useFetchGenres(isMovie(item) ? "movie" : "tv");

  const navigate = useNavigate();

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
              <span className={styles.contentDetails}>{date}</span>
            </div>
            <div className={styles.upperRight}>
              <RatingIcon type="full" />
              <span>{(item.vote_average / 2).toFixed(1)}</span>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              <span>1h 30min, {item.original_language}</span>
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
