import type { ICast } from "../../types/Details";
import styles from "./castSection.module.css";

interface ICastSection {
  cast: ICast[];
}

function CastSection({ cast }: ICastSection) {
  return (
    <div className={styles.castSection}>
      <div className={styles.title}>Actors</div>
      <div className={styles.castList}>
        {cast.map((actor) => (
          <div key={actor.id} className={styles.actorCard}>
            <img
              className={styles.actorImage}
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={`${actor.name} image`}
            />
            <span className={styles.actorName}>{actor.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CastSection;