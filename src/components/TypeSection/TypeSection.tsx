import TypeSectionContent from "./TypeSectionContent/TypeSectionContent";

function TypeSection() {
  return (
    <>
      <TypeSectionContent
        type="movie"
        category="popular"
        title="Movies"
        path="/movies"
        variant={"small"}
      />

      <TypeSectionContent
        type="tv"
        category="popular"
        title="TV Series"
        path="/tvseries"
        variant={"small"}
      />
    </>
  );
}

export default TypeSection;
