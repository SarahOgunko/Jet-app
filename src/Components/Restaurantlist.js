import React from "react";
import { Restaurant } from "./Restaurant";

export const Restaurantlist = ({ data }) => {
  return !data ? (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  ) : (
    <div className="Restaurant-list">
      {data.restaurants.slice(0, 10).map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};


