function SliderOverflowCard() {
  return (
    <>
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
    </>
  );
}

export default SliderOverflowCard;
