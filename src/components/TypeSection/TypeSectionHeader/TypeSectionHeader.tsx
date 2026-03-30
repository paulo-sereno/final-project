import ArrowIcon from "../../../icons/ArrowIcon";
import styles from "./typeSectionHeader.module.css";
import { Link } from "react-router-dom";

function TypeSectionHeader({ title, path, variant }: { title: string; path?: string; variant: "small" | "big" }) {
  const content = (
    <div className={`${styles.sectionTitle} ${styles[variant]}`}>
      <span className={styles.headerName}>{title}</span>
      <ArrowIcon />
    </div>
  );

  return <>{path ? <Link to={path}>{content}</Link> : content}</>;
}

export default TypeSectionHeader;
