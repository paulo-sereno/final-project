import Chip from "../components/Chip/Chip";
import HeaderNavBar from "../components/HeaderNavBar/HeaderNavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import SliderOverflow from "../components/SliderOverflow/SliderOverflow";
import TypeSectionContent from "../components/TypeSection/TypeSectionContent/TypeSectionContent";

function MoviesPage() {
  return (
    <>
      <HeaderNavBar />

      <main>
        <SearchBar />

        <SliderOverflow />

        <Chip label={"PRIMARY"} variant={"primary"} />
        <Chip label={"SECONDARY"} variant={"secondary"} />

        <div style={{ padding: "8px" }}>
          <Chip label={"TERCIARY"} variant={"terciary"} />
        </div>

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
