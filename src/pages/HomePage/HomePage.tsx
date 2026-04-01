import HeaderNavBar from "../../components/HeaderNavBar/HeaderNavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import SliderOverflow from "../../components/SliderOverflow/SliderOverflow";
import TypeSection from "../../components/TypeSection/TypeSection";

function HomePage() {
  return (
    <>
      <HeaderNavBar />

      <main>
        <SearchBar />

        <SliderOverflow type={"movie"} />

        <TypeSection />
      </main>
    </>
  );
}

export default HomePage;
