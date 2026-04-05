import Chip from "../Chip/Chip";
import type { IDetails } from "../../types/Details";
import LikeIcon from "../../icons/LikeIcon";
import styles from "./chipsBar.module.css";

interface IChipsBar {
  details: IDetails | undefined;
}

function ChipsBar({ details }: IChipsBar) {
  return (
    <section className={styles.chipsBar}>
      <div className={styles.chipsContainer}>
        <Chip label="AGE" variant="secondary" />
        {details?.genres.map((genre) => (
          <Chip key={genre.id} label={genre.name} variant="secondary" />
        ))}
        {details && (
          <Chip
            label={(details.vote_average / 2).toFixed(1)}
            variant="secondary"
            hasIcon={true}
          />
        )}
      </div>
      <div className={styles.likeContainer}>
        <LikeIcon />
      </div>
    </section>
  );
}

export default ChipsBar;