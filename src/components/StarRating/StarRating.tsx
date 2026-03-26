import RatingIcon from "../../icons/RatingIcon";

function StarRating({ voteAverage }: { voteAverage: number }) {
  const rating = voteAverage / 2;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="stars">
      {Array(fullStars)
        .fill(null)
        .map((_, i) => (
          <RatingIcon key={`full-${i}`} type="full" />
        ))}
      {hasHalfStar && <RatingIcon type="half" />}
      {Array(emptyStars)
        .fill(null)
        .map((_, i) => (
          <RatingIcon key={`empty-${i}`} type="empty" />
        ))}
    </div>
  );
}

export default StarRating;
