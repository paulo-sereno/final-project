import useFetchMedia from "../../hooks/useFetchMedia";
import type { MediaItem } from "../../types/MediaItem";
import styles from "./slideroverflow.module.css";
import SliderOverflowCard from "./SliderOverflowCard/SliderOverflowCard";

interface ISliderOverflow {
  type: "movie" | "tv";
}

function SliderOverflow({ type }: ISliderOverflow) {
  const { results } = useFetchMedia<MediaItem>({
    category: "popular",
    type: type,
  });
  return (
    <>
      <section className={styles.sliderOverflow}>
        {results.map((item) => (
          <SliderOverflowCard key={item.id} item={item} />
        ))}
      </section>
    </>
  );
}

export default SliderOverflow;
