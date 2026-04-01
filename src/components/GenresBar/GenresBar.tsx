import useFetchGenres from "../../hooks/useFetchGenres";
import Chip from "../Chip/Chip";
import styles from "./genresBar.module.css";

interface IGenresBar {
  type: "movie" | "tv";
}

function GenresBar({ type }: IGenresBar) {
  const { genres } = useFetchGenres(type);

  return (
    <section className={styles.genresBarContainer}>
      {genres.map((genre) => (
        <Chip label={genre.name} variant={"primary"} />
      ))}
    </section>
  );
}

export default GenresBar;
