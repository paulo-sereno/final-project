import FilterIcon from "../../icons/FilterIcon";
import GlassIcon from "../../icons/GlassIcon";
import styles from "./searchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <section className={styles.searchBarContainer}>
        <GlassIcon />
        <input type="search" placeholder="Search" />
        <FilterIcon />
      </section>
    </div>
  );
}

export default SearchBar;
