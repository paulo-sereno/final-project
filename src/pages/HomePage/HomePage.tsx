import HeaderNavBar from "../../components/HeaderNavBar/HeaderNavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import SliderOverflow from "../../components/SliderOverflow/SliderOverflow";
import TypeSection from "../../components/TypeSection/TypeSection";
import styles from "./homePage.module.css";

function HomePage() {
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

        <TypeSection />
      </main>
    </>
  );
}

export default HomePage;
