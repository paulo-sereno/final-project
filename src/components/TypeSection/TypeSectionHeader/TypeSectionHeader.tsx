import ArrowIcon from "../../../icons/ArrowIcon";
import styles from "./typeSectionHeader.module.css";

function TypeSectionHeader({ title }: { title: string }) {
  return (
    <div className={styles.sectionTitle}>
      <span className={styles.headerName}>{title}</span>
      <ArrowIcon />
    </div>
  );
}

export default TypeSectionHeader;
