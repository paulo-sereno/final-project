function HomePage() {
  return (
    <>
      {/* component HeaderNavBar */}
      <header className="appHeader">
        <div className="userInfo">
          <img className="userAvatar" src="" alt="User profile avatar" />
          <div>
            <span className="welcomeText">Welcome back</span>
            <span className="username">Aymen Missaoui</span>
          </div>
        </div>

        <button className="menuBtn">...</button>
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
