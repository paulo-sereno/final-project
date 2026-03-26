import type { IPopularMovie } from "../../../types/PopularCategory";
import StarRating from "../../StarRating/StarRating";
import styles from "./typeSectionCard.module.css";

function TypeSectionCard({ movie }: { movie: IPopularMovie }) {
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.cardImage}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`Poster image of ${movie.title}`}
      />
      <span>{movie.title}</span>
      <StarRating voteAverage={movie.vote_average} />
    </div>
  );
}

export default TypeSectionCard;
