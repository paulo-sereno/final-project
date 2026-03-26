import usePopularCategory from "../../hooks/usePopularMovies";
import type { IPopularMovie } from "../../types/PopularCategory";
import styles from "./typeSection.module.css";
import TypeSectionCard from "./TypeSectionCard/TypeSectionCard";
import TypeSectionHeader from "./TypeSectionHeader/TypeSectionHeader";

function TypeSection() {
  const { popularCategory } = usePopularCategory<IPopularMovie>({
    category: "movie",
  });
  return (
    <>
      <section className={styles.typeSection}>
        <TypeSectionHeader title={"Movies"} />
        {popularCategory.map((movie) => (
          <TypeSectionCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
}

export default TypeSection;
