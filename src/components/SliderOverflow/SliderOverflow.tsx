import type { ReactNode } from "react"
import styles from "./slideroverflow.module.css"

interface ISliderOverflow {
  children: ReactNode;
}

function SliderOverflow({ children }: ISliderOverflow) {
  return (
    <>
      <section className={styles.sliderOverflow}>{children}</section>
    </>
  );
}

export default SliderOverflow;
