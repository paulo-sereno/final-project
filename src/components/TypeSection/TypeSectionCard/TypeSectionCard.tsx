import type { MediaItem } from "../../../types/MediaItem";
import isMovie from "../../../types/MediaItem";
import StarRating from "../../StarRating/StarRating";
import styles from "./typeSectionCard.module.css";

interface ITypeSectionCard {
  item: MediaItem;
  variant: "small" | "big";
}

function TypeSectionCard({ item, variant }: ITypeSectionCard) {
  const title = isMovie(item) ? item.title : item.name;

  return (
    <div className={`${styles.cardContainer} ${styles[variant]}`}>
      <img
        className={styles.cardImage}
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={`Poster image of ${title}`}
      />
      <span>{title}</span>
      <StarRating voteAverage={item.vote_average} />
    </div>
  );
}

export default TypeSectionCard;
