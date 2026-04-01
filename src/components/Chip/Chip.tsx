import RatingIcon from "../../icons/RatingIcon";
import styles from "./chip.module.css";

function Chip({
  label,
  variant,
  hasIcon = false,
}: {
  label: string;
  variant: "primary" | "secondary" | "terciary";
  hasIcon?: boolean;
}) {
  return (
    <div className={`${styles.chip} ${styles[variant]}`}>
      {hasIcon && <RatingIcon type={"full"} />}
      <span>{label}</span>
    </div>
  );
}

export default Chip;
