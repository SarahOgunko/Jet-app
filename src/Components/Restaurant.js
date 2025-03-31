export const Restaurant = ({ restaurant }) => {
  const { name, address, rating, cuisines, logoUrl } = restaurant;

  const fullAddress = `${address.firstLine}, ${address.city}, ${address.postalCode}`;
  const starRating = rating.starRating;
  const cuisineNames = cuisines.map((cuisine) => cuisine.name).join(", ");

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={logoUrl} alt={name} className="restaurant-img" />
        </div>
        <div className="flip-card-back">
          <h3>{name}</h3>
          <p>Cuisines: {cuisineNames}</p>
          <p>Rating: {starRating}</p>
          <p>Address: {fullAddress}</p>
        </div>
      </div>
    </div>
  );
};

  
