import type { ICast } from "../../types/Details";

interface ICastSection {
  cast: ICast[];
}

function CastSection({ cast }: ICastSection) {
  return (
    <div>
      <div>Actors</div>
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
  );
}

export default CastSection;