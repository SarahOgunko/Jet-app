import React from "react";
import { Restaurant } from "./Restaurant";

export const Restaurantlist = ({data}) =>{
    if (!data) {
        return <div className="spinner"></div>;
      }
    
      const restaurantData = data.restaurants.slice(0, 10); 

    
      return (
        <div className='Restaurant-list'>
          {restaurantData.map((restaurant) => (
            <Restaurant key={restaurant.id} restaurant={restaurant}/>
          ))}
        </div>
      );
    
}
