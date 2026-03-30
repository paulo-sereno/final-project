import TypeSectionContent from "./TypeSectionContent/TypeSectionContent";

function TypeSection() {
  return (
    <>
      <TypeSectionContent
        type="movie"
        category="popular"
        title="Movies"
        path="/movies"
      />

      <TypeSectionContent
        type="tv"
        category="popular"
        title="TV Series"
        path="/tvseries"
      />
    </>
  );
}

export default TypeSection;
