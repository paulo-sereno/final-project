import styles from "./homePage.module.css";

function HomePage() {
  return (
    <>
      {/* component HeaderNavBar */}
      <header className={styles.appHeader}>
        <div className={styles.welcomeUser}>
          <div>
            <img
              className={styles.userAvatar}
              src="/src/assets/AymenAvatar.png"
              alt="User profile avatar"
            />
          </div>
          <div className={styles.userInfo}>
            <span className={styles.welcomeText}>Welcome back</span>
            <span className={styles.username}>Aymen Missaoui</span>
          </div>
        </div>
        <div className="menuBtn">{}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icon/editor/short_text_24px">
              <path
                id="icon/editor/short_text_24px_2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 10C4 9.44772 4.44772 9 5 9H23C23.5523 9 24 9.44771 24 10V10.8C24 11.3523 23.5523 11.8 23 11.8H5C4.44772 11.8 4 11.3523 4 10.8V10ZM4 15.6C4 15.0477 4.44772 14.6 5 14.6H15.5C16.0523 14.6 16.5 15.0477 16.5 15.6V16.4C16.5 16.9523 16.0523 17.4 15.5 17.4H5C4.44772 17.4 4 16.9523 4 16.4V15.6ZM11.5 21.2C11.5 20.6477 11.0523 20.2 10.5 20.2H5C4.44772 20.2 4 20.6477 4 21.2V22C4 22.5522 4.44772 23 5 23H10.5C11.0523 23 11.5 22.5522 11.5 22V21.2Z"
                fill="#B9C1D9"
                fill-opacity="0.54"
              />
            </g>
          </svg>
        </div>
      </header>

      <main>
        <section className="searchBar">
          {/* component SearchBar */}
          <img className="glassIcon" src="" alt="Magnifying glass icon" />
          <input type="search" placeholder="Search" />
          <img className="filterIcon" src="" alt="Filter bar icon" />
        </section>

        <section className="sliderOverflow">
          {/* component SliderOverflow */}
          <div className="sliderCard">
            <div className="upper">
              <div className="upperLeft">
                <h1 className="contentTitle">Rima</h1>
                <span className="contentDetails">
                  Drama, Horror, Mystery & Thriller
                </span>
                <span className="contentDetails">15, March, 2020</span>
              </div>
              <div className="upperRight">
                <img className="ratingIcon" src="" alt="Rating icon" />
                <span>4.7</span>
                {/* rate value */}
              </div>
            </div>
            <div className="bottom">
              <div className="bottomLeft">
                <span>1h 30min, Arabic</span>
              </div>
              <div className="bottomRight">
                <button className="videoBtn">PLAY ICON</button>
              </div>
            </div>
          </div>
        </section>

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
