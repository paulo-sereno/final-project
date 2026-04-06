import { useState } from "react";
import type { IDetails } from "../../types/Details";
import styles from "./itemDetails.module.css";

interface IItemDetails {
  details: IDetails | undefined;
}

function ItemDetails({ details }: IItemDetails) {
  const title = details?.title ?? details?.name;

  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.itemDetails}>
      <div className={styles.title}>{title}</div>
      <div className={`${styles.overview} ${!expanded ? styles.collapsed : ""}`}>
        {details?.overview}
      </div>
      <button className={styles.showMore} onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default ItemDetails