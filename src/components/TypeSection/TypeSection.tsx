import usePopularCategory from "../../hooks/usePopularMovies";
import type { IPopularMovie, IPopularTV } from "../../types/PopularCategory";
import styles from "./typeSection.module.css";
import TypeSectionCard from "./TypeSectionCard/TypeSectionCard";
import TypeSectionHeader from "./TypeSectionHeader/TypeSectionHeader";

function TypeSection() {
  const { popularCategory: popularMovies } = usePopularCategory<IPopularMovie>({
    category: "movie",
  });

  const { popularCategory: popularTV } = usePopularCategory<IPopularTV>({
    category: "tv",
  });

  return (
    <>
      <section className={styles.typeSection}>
        <div className={styles.sectionTitleContainer}>
          <TypeSectionHeader title={"Movies"} />
        </div>
        <div className={styles.sectionCardsContainer}>
          {popularMovies.map((item) => (
            <TypeSectionCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className={styles.typeSection}>
        <div className={styles.sectionTitleContainer}>
          <TypeSectionHeader title={"TV Series"} />
        </div>
        <div className={styles.sectionCardsContainer}>
          {popularTV.map((item) => (
            <TypeSectionCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default TypeSection;
