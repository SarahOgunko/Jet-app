import { Restaurantlist } from "../Components/Restaurantlist";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Homepage = () =>{
    const [data, setData] = useState(null);
  
    const fetchData = async () => {
        const response = await axios.get(
          "https://thingproxy.freeboard.io/fetch/https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF"
        );
        setData(response.data);
    };
  
    useEffect(() => {
      fetchData();
      console.log(data)
    }, []);
  
    return (
      <div className="App">
        <h1>Restaurants Near EC4M7RF</h1>
       <Restaurantlist data = {data}/>
      </div>
    );
  }

