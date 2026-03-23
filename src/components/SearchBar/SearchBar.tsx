import FilterIcon from "../../icons/FilterIcon";
import GlassIcon from "../../icons/GlassIcon";
import styles from "./searchBar.module.css";

function SearchBar() {
  return (
    <section className={styles.searchBarContainer}>
      <GlassIcon />
      <input type="search" placeholder="Search" />
      <FilterIcon />
    </section>
  );
}

export default SearchBar;
