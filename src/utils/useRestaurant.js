import { useState, useEffect } from "react";
import { RESTAURANT_FETCH_URL } from "../config";

const useRestaurant = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const api_data = await fetch(RESTAURANT_FETCH_URL);
    const json = await api_data.json();
    // console.log(json);
    setAllRestaurants(json?.data?.cards?.[2]?.data?.data?.cards);
  }

  return allRestaurants;
};

export default useRestaurant;
