import styles from "./sliderOverflowCard.module.css";
import type { IPopularMovie } from "../../../types/PopularCategory";
import RatingIcon from "../../../icons/RatingIcon";
import PlayIcon from "../../../icons/PlayIcon";

function SliderOverflowCard({ movie }: { movie: IPopularMovie }) {
  return (
    <div>
      <div className={styles.sliderCard} key={movie.id}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt=""
        />
        <div className={styles.movieInfo}>
          <div className={styles.upper}>
            <div className={styles.upperLeft}>
              <h1 className={styles.contentTitle}>{movie.title}</h1>
              <span className={styles.contentDetails}>
                {movie.genre_ids.join(", ")}
              </span>
              <span className={styles.contentDetails}>
                {movie.release_date}
              </span>
            </div>
            <div className={styles.upperRight}>
              <div className="ratingIconContainer">
                <RatingIcon />
              </div>
              <div className="voteAverageContainer">
                <span>{(movie.vote_average / 2).toFixed(1)}</span>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              <span>1h 30min, {movie.original_language}</span>
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
