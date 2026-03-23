import GlassIcon from "../../icons/GlassIcon";

function SearchBar() {
  return (
    <section className="searchBar">
      <GlassIcon />
      <input type="search" placeholder="Search" />
      <img className="filterIcon" src="" alt="Filter bar icon" />
    </section>
  );
}

export default SearchBar;
