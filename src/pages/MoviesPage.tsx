import GenresBar from "../components/GenresBar/GenresBar";
import HeaderNavBar from "../components/HeaderNavBar/HeaderNavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import SliderOverflow from "../components/SliderOverflow/SliderOverflow";
import TypeSectionContent from "../components/TypeSection/TypeSectionContent/TypeSectionContent";
import useFetchGenres from "../hooks/useFetchGenres";

function MoviesPage() {
  useFetchGenres("movie");
  return (
    <>
      <HeaderNavBar />

      <main>
        <SearchBar />
        <SliderOverflow />
        <GenresBar type={"movie"} />
        <TypeSectionContent
          type={"movie"}
          category={"popular"}
          title={"Movies"}
          variant={"big"}
        />
      </main>
    </>
  );
}

export default MoviesPage;
