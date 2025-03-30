export const Restaurant = ({restaurant}) =>{
    const { name, address, rating, cuisines } = restaurant;

    const fullAddress = `${address.firstLine}, ${address.city}, ${address.postalCode}`;
  
    const starRating = rating.starRating 
  
    const cuisineNames = cuisines.map(cuisine => cuisine.name).join(", ");
  
    return (
      <article className="Restaurant">
        <h3>{name}</h3>
        <p>Cuisines: {cuisineNames}</p>
        <p>Rating: {starRating}</p>
        <p>Address: {fullAddress}</p>
        
      </article>
    );
  };
  
