import PlayIcon from "../../icons/PlayIcon";
import type { IDetails } from "../../types/Details";
import type { IVideo } from "../../types/Details";

interface ITrailerSection {
  details: IDetails | undefined;
  trailer: IVideo | undefined;
}

function TrailerSection({ details, trailer }: ITrailerSection) {
  const title = details?.title ?? details?.name;

  return (
    <section className="trailer">
      <img
        src={`https://image.tmdb.org/t/p/original${details?.backdrop_path}`}
        alt={`Backdrop from ${title}`}
      />
      {trailer && (
        <a href={`https://www.youtube.com/watch?v=${trailer.key}`}>
        <PlayIcon />
        </a>
      )}
    </section>
  );
}

export default TrailerSection;