import useFetchMedia from "../../../hooks/useFetchMedia";
import type { MediaItem } from "../../../types/MediaItem";
import TypeSectionCard from "../TypeSectionCard/TypeSectionCard";
import TypeSectionHeader from "../TypeSectionHeader/TypeSectionHeader";
import styles from "./typeSectionContent.module.css";

interface ISectionContent {
  type: "movie" | "tv";
  category: string;
  title: string;
  path: string;
}

function TypeSectionContent({ type, category, title, path }: ISectionContent) {
  const { results } = useFetchMedia<MediaItem>({
    type: type,
    category: category,
  });

  return (
    <section className={styles.typeSection}>
      <div className={styles.sectionTitleContainer}>
        <TypeSectionHeader title={title} path={path} />
      </div>
      <div className={styles.sectionCardsContainer}>
        {results.map((item) => (
          <TypeSectionCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default TypeSectionContent;
