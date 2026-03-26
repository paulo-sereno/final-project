import usePopularCategory from "../../hooks/usePopularMovies";
import type { IPopularMovie } from "../../types/PopularCategory";
import styles from "./slideroverflow.module.css";
import SliderOverflowCard from "./SliderOverflowCard/SliderOverflowCard";

function SliderOverflow() {
  const { popularCategory } = usePopularCategory<IPopularMovie>({
    category: "movie",
  });
  return (
    <>
      <section className={styles.sliderOverflow}>
        {popularCategory.map((movie) => (
          <SliderOverflowCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}

export default SliderOverflow;
