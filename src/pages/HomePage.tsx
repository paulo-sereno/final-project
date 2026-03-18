function HomePage() {
  return (
    <>
      {/* component HeaderNavBar */}
      <header className="app-header">
        <div className="user-info">
          <img className="user-avatar" src="" alt="User profile avatar" />
          <div>
            <span className="welcome-text">Welcome back</span>
            <span className="username">Aymen Missaoui</span>
          </div>
        </div>

        <button className="menu-btn">...</button>
      </header>

      <main>
        <section className="search-bar">
          {/* component SearchBar */}
          <img className="glass-icon" src="" alt="Magnifying glass icon" />
          <input type="search" placeholder="Search" />
          <img className="filter-icon" src="" alt="Filter bar icon" />
        </section>

        <section className="slider-overflow">
          {/* component SliderOverflow */}
          <div className="slider-card">
            <div className="upper">
              <div className="upper-left">
                <h1 className="content-title">Rima</h1>
                <span className="content-details">
                  Drama, Horror, Mystery & Thriller
                </span>
                <span className="content-details">15, March, 2020</span>
              </div>
              <div className="upper-right">
                <img className="rating-icon" src="" alt="Rating icon" />
                <span>4.7</span>
                {/* rate value */}
              </div>
            </div>
            <div className="bottom">
              <div className="bottom-left">
                <span>1h 30min, Arabic</span>
              </div>
              <div className="bottom-right">
                <button className="video-btn">PLAY ICON</button>
              </div>
            </div>
          </div>
        </section>

        <section className="my-list">
          <div className="my-list-title">
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
              className="cover-img"
              src=""
              alt="Cover photo from movie/series"
            />
            <span>Movie/Series Title</span>
            <span>Five Stars Rating</span>
          </div>
        </section>

        <section className="recommended-list">
          <div className="recommended-title">
            <h1>Recommended</h1>
            <img
              className="arrow-icon"
              src=""
              alt="Recommended section selector arrow icon"
            />
          </div>
          <div className="card">
            {/* component Card */}
            <img
              className="cover-img"
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
