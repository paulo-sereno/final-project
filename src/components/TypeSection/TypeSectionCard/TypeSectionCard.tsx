import type { IPopularCategory } from "../../../types/PopularCategory";
import isMovie from "../../../types/PopularCategory";
import StarRating from "../../StarRating/StarRating";
import styles from "./typeSectionCard.module.css";

interface ITypeSectionCard {
  item: IPopularCategory;
}

function TypeSectionCard({ item }: ITypeSectionCard) {
  const title = isMovie(item) ? item.title : item.name;

  return (
    <div className={styles.cardContainer}>
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
