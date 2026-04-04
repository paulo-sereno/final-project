import { useParams } from "react-router-dom";
import Chip from "../components/Chip/Chip";
import useFetchDetails from "../hooks/useFetchDetails";
import TrailerSection from "../components/TrailerSection/TrailerSection";
import ChipsBar from "../components/ChipsBar/ChipsBar";
import CastSection from "../components/CastSection/CastSection";
import ItemDetails from "../components/ItemDetails/ItemDetails";

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
      <TrailerSection details={details} trailer={trailer} />
      <ChipsBar details={details} />
      <section className="itemDetails">
        <ItemDetails details={details} />
        <CastSection cast={cast} />
      </section>

      <Chip label={"Open IMDb"} variant={"terciary"} />
    </>
  );
}

export default DetailsPage;
