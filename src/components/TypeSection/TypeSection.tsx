import styles from "./typeSection.module.css";
import TypeSectionHeader from "./TypeSectionHeader/TypeSectionHeader";

function TypeSection() {
  return (
    <section className={styles.typeSection}>
      <TypeSectionHeader title={"My List"} />
      
    </section>
  );
}

export default TypeSection;
