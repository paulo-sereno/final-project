import { useParams } from "react-router-dom";
import Chip from "../components/Chip/Chip";
import useFetchDetails from "../hooks/useFetchDetails";

function DetailsPage() {
  const { id, type } = useParams<{ id: string; type: "movie" | "tv" }>();

  const { details, videos, cast } = useFetchDetails({
    type: type!,
    id: id!,
  });

  console.log("Details000:", details);
  console.log("Videos000:", videos);
  console.log("Cast000:", cast);

  const trailer = videos.find(
    (item) => item.type === "Trailer" && item.site === "YouTube",
  );

  return (
    <>
      <section className="trailer">
        <img
          src={`https://image.tmdb.org/t/p/original${details?.backdrop_path}`}
          alt={`Backdrop from ${details?.title ?? details?.name}`}
        />
        {trailer && (
          <a href={`https://www.youtube.com/watch?v=${trailer.key}`}></a>
        )}
      </section>

      <section className="chipsBar">
        <div className="chipsContainer">
          <Chip label={"AGE"} variant={"secondary"} />
          {details?.genres.map((genre) => (
            <Chip label={genre.name} variant={"secondary"} key={genre.id} />
          ))}
          {details && (
            <Chip
              label={(details?.vote_average / 2).toFixed(1)}
              variant={"secondary"}
              hasIcon={true}
            />
          )}
        </div>
        <div className="likeContainer">LIKE ICON</div>
      </section>

      <section className="itemDetails">
        <div>
          <div>{details?.title ?? details?.name}</div>
          <div>{details?.overview}</div>
        </div>

        <div>
          <div>ACTORS</div>
          <div>
            {cast.map((actor) => (
              <div key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} image`}
                />
                <span>{actor.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Chip label={"Open IMDb"} variant={"terciary"} />
    </>
  );
}

export default DetailsPage;
