import { RestaurantList } from "../Components/RestaurantList";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const HomePage = () => {
  const [data, setData] = useState(null);

  const url = "BS42NN";

  const fetchData = async () => {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${url}`
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="title">Restaurants Near {url}</h1>
      <RestaurantList data={data} />
    </div>
  );
};


