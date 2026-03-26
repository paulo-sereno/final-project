import TypeSectionContent from "./TypeSectionContent/TypeSectionContent";

function TypeSection() {
  return (
    <>
      <TypeSectionContent type={"movie"} category="popular" title={"Movies"} />
      <TypeSectionContent type={"tv"} category="popular" title={"TV Series"} />
    </>
  );
}

export default TypeSection;
