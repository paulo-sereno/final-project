import styles from "./typeSection.module.css";
import TypeSectionCard from "./TypeSectionCard/TypeSectionCard";
import TypeSectionHeader from "./TypeSectionHeader/TypeSectionHeader";

function TypeSection() {
  return (
    <>
      <section className={styles.typeSection}>
        <TypeSectionHeader title={"Movies"} />
        <TypeSectionCard />
      </section>
    </>
  );
}

export default TypeSection;
