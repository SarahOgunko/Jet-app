import React, { useEffect, useState } from "react";
import axios from "axios";
import { RestaurantList } from "../Components/RestaurantList";
import { RestaurantForm } from "../Components/RestaurantForm";

export const HomePage = () => {
  const [data, setData] = useState(null);
  const [postcode, setPostcode] = useState("BS12NN");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(postcode);
  }, [postcode]);

  const fetchData = async (postcode) => {
    try {
      setError(null);
      const response = await axios.get(
        `http://localhost:4000/${postcode}`

      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setError("Oops! An error occurred while fetching your data.");
    }
  };

  const handlePostcodeSubmit = (newPostcode) => {
    setPostcode(newPostcode);
  };

  return (
    <div>
      <h1 className="title">Restaurants Near {postcode}</h1>
      <RestaurantForm onSubmit={handlePostcodeSubmit} />
      {error && <div className="error-text">{error}</div>}
      <RestaurantList data={data} />
    </div>
  );
};

