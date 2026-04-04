import Chip from "../Chip/Chip";
import type { IDetails } from "../../types/Details";

interface IChipsBar {
  details: IDetails | undefined;
}

function ChipsBar({ details }: IChipsBar) {
  return (
    <section className="chipsBar">
      <div className="chipsContainer">
        <Chip label="AGE" variant="secondary" />
        {details?.genres.map((genre) => (
          <Chip key={genre.id} label={genre.name} variant="secondary" />
        ))}
        {details && (
          <Chip
            label={(details.vote_average / 2).toFixed(1)}
            variant="secondary"
            hasIcon={true}
          />
        )}
      </div>
      <div className="likeContainer">LIKE ICON</div>
    </section>
  );
}

export default ChipsBar;