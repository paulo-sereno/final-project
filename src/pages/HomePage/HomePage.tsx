import HeaderNavBar from "../../components/HeaderNavBar/HeaderNavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import SliderOverflow from "../../components/SliderOverflow/SliderOverflow";
import SliderOverflowCard from "../../components/SliderOverflow/SliderOverflowCard/SliderOverflowCard";
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

        <SliderOverflow>
          <SliderOverflowCard />
        </SliderOverflow>

        <section className="myList">
          <div className="myListTitle">
            <h1>My List</h1>
            <img
              className="arrow-icon"
              src=""
              alt="My List section selector arrow icon"
            />
          </div>
          <div className="card">
            {/* component Card */}
            <img
              className="coverImg"
              src=""
              alt="Cover photo from movie/series"
            />
            <span>Movie/Series Title</span>
            <span>Five Stars Rating</span>
          </div>
        </section>

        <section className="recommendedList">
          <div className="recommendedTitle">
            <h1>Recommended</h1>
            <img
              className="arrowIcon"
              src=""
              alt="Recommended section selector arrow icon"
            />
          </div>
          <div className="card">
            {/* component Card */}
            <img
              className="coverImg"
              src=""
              alt="Cover photo from movie/series"
            />
            <span>Movie/Series Title</span>
            <span>Five Stars Rating</span>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
