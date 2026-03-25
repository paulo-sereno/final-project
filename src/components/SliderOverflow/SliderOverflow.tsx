import usePopularMovies from "../../hooks/usePopularMovies";
import styles from "./slideroverflow.module.css";
import SliderOverflowCard from "./SliderOverflowCard/SliderOverflowCard";

function SliderOverflow() {
  const { popularMovies } = usePopularMovies();
  return (
    <>
      <section className={styles.sliderOverflow}>
        {popularMovies.map((movie) => (
          <SliderOverflowCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}

export default SliderOverflow;
