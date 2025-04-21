import { useState } from "react";

export const RestaurantForm = ({ onSubmit }) => {
  const [inputPostcode, setInputPostcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputPostcode);
    setInputPostcode("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter postcode here"
          value={inputPostcode}
          onChange={(e) => setInputPostcode(e.target.value)}
          className="search-bar"
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};
