import { useNavigate } from "react-router-dom";
import PlayIcon from "../../icons/PlayIcon";
import type { IDetails } from "../../types/Details";
import type { IVideo } from "../../types/Details";
import styles from "./trailerSection.module.css";
import BackIcon from "../../icons/BackIcon";
import ShareIcon from "../../icons/ShareIcon";

interface ITrailerSection {
  details: IDetails | undefined;
  trailer: IVideo | undefined;
}

function TrailerSection({ details, trailer }: ITrailerSection) {
  const title = details?.title ?? details?.name;
  const runtime = details?.runtime ?? details?.episode_run_time?.[0];
  const navigate = useNavigate();

  return (
    <section className={styles.trailerSection}>
      <img
        src={`https://image.tmdb.org/t/p/original${details?.backdrop_path}`}
        alt={`Backdrop from ${title}`}
      />

      <div className={styles.overlay} />
      
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          <BackIcon />
        </button>
        <button className={styles.shareBtn}>
          <ShareIcon />
        </button>
      </div>

      {trailer && (
        <a className={styles.playBtn} href={`https://www.youtube.com/watch?v=${trailer.key}`} target="_blank" rel="noreferrer">
        <PlayIcon />
        </a>
      )}

      {runtime && (
        <span className={styles.runtime}>
          {`${Math.floor(runtime / 60)}h ${runtime % 60}min`}
        </span>
      )}
    </section>
  );
}

export default TrailerSection;