import useFetchMedia from "../../../hooks/useFetchMedia";
import type { MediaItem } from "../../../types/MediaItem";
import TypeSectionCard from "../TypeSectionCard/TypeSectionCard";
import TypeSectionHeader from "../TypeSectionHeader/TypeSectionHeader";
import styles from "./typeSectionContent.module.css";

interface ISectionContent {
  type: "movie" | "tv";
  category: string;
  title: string;
  path?: string;
  variant: "small" | "big";
  wrap?: boolean;
}

function TypeSectionContent({
  type,
  category,
  title,
  path,
  variant,
  wrap,
}: ISectionContent) {
  const { results } = useFetchMedia<MediaItem>({
    type: type,
    category: category,
  });

  return (
    <section className={styles.typeSection}>
      <div className={styles.sectionTitleContainer}>
        <TypeSectionHeader title={title} path={path} variant={variant} />
      </div>
      <div
        className={`${styles.sectionCardsContainer} ${wrap ? styles.wrap : ""}`}
      >
        {results.map((item) => (
          <TypeSectionCard key={item.id} item={item} variant={variant} />
        ))}
      </div>
    </section>
  );
}

export default TypeSectionContent;
