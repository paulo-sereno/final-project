import useFetchMedia from "../../hooks/useFetchMedia";
import type { IMovie } from "../../types/MediaItem";
import styles from "./slideroverflow.module.css";
import SliderOverflowCard from "./SliderOverflowCard/SliderOverflowCard";

function SliderOverflow() {
  const { results } = useFetchMedia<IMovie>({
    category: "popular",
    type: "movie",
  });
  return (
    <>
      <section className={styles.sliderOverflow}>
        {results.map((movie) => (
          <SliderOverflowCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}

export default SliderOverflow;
