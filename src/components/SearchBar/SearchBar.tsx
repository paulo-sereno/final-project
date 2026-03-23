import FilterIcon from "../../icons/FilterIcon";
import GlassIcon from "../../icons/GlassIcon";

function SearchBar() {
  return (
    <section className="searchBar">
      <GlassIcon />
      <input type="search" placeholder="Search" />
      <FilterIcon />
    </section>
  );
}

export default SearchBar;
