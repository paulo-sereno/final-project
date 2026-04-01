import GenresBar from "../components/GenresBar/GenresBar";
import HeaderNavBar from "../components/HeaderNavBar/HeaderNavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import SliderOverflow from "../components/SliderOverflow/SliderOverflow";
import TypeSectionContent from "../components/TypeSection/TypeSectionContent/TypeSectionContent";
import useFetchGenres from "../hooks/useFetchGenres";

function TvPage() {
  useFetchGenres("tv");
  return (
    <>
      <HeaderNavBar />

      <main>
        <SearchBar />
        <SliderOverflow type={"tv"} />
        <GenresBar type={"tv"} />
        <TypeSectionContent
          type={"tv"}
          category={"popular"}
          title={"TV Series"}
          variant={"big"}
        />
      </main>
    </>
  );
}

export default TvPage;
