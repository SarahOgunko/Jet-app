import React from "react";
import { Restaurant } from "./Restaurant";

export const Restaurantlist = ({data}) =>{
    if (!data) {
        return <p>Loading...</p>;
      }
    
      const restaurantData = data.restaurants.slice(0, 10); 
    
      return (
        <div>
          {restaurantData.map((restaurant) => (
            <Restaurant key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      );
    
}
