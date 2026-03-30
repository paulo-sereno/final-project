import HeaderNavBar from "../components/HeaderNavBar/HeaderNavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import SliderOverflow from "../components/SliderOverflow/SliderOverflow";

function MoviesPage() {
  return (
    <>
      <header className={styles.appHeader}>
        <HeaderNavBar />
      </header>

      <main>
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>

        <SliderOverflow />
      </main>
    </>
  );
}

export default MoviesPage;
