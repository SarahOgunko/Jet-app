import React from "react";
import { Restaurant } from "./Restaurant";

export const RestaurantList = ({ data }) => {
  return (
    <div className="Restaurant-list">
      {!data ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        data.restaurants.slice(0, 10).map((restaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        ))
      )}
    </div>
  );
};