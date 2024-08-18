
function RatingStars({ rating }) {
  // Nombre total d'étoiles
  const totalStars = 5;

  return (
    <div className="m-0 p-0 rating-stars flex justify-around text-sm">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={`fa-star ${index < rating ? 'fas text-yellow-400' : 'far text-gray-400'}`}
        ></span>
      ))}
    </div>
  );
};

export default RatingStars;
