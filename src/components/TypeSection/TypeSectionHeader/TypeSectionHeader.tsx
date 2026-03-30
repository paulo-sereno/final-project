import ArrowIcon from "../../../icons/ArrowIcon";
import styles from "./typeSectionHeader.module.css";
import { Link } from "react-router-dom";

function TypeSectionHeader({ title, path }: { title: string, path: string }) {
  return (
    <>
      <Link to={path}>
        <div className={styles.sectionTitle}>
          <span className={styles.headerName}>{title}</span>
          <ArrowIcon />
        </div>
      </Link>
    </>
  );
}

export default TypeSectionHeader;
