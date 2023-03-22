import { RestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import not_found from "../not_found.png";
import { filterData } from "../utils/helper";
import { RESTAURANT_FETCH_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";

const Body = ({ user }) => {
  const [searchText, setSearchText] = useState();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const allRestaurants = useRestaurant();

  useEffect(() => {
    setFilteredRestaurants(allRestaurants);
  }, [allRestaurants]);

  const status = useOnline();

  if (!status) {
    console.log(status);
    return <h1>You're not connected to the internet</h1>;
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <input
          type="text"
          className="p-3 ml-14 focus:bg-slate-100 border-2 rounded-l-full"
          placeholder="Search a restaurant..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="bg-slate-200 p-3.5 my-7 rounded-r-full hover:bg-slate-300"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap ml-14">
        {filteredRestaurants.length === 0 ? (
          <img src={not_found} />
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} user={user} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
