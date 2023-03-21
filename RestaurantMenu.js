import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config.js";
import Shimmer from "./Shimmer.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurantMenu(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="restaurant-details">
        <h1>Restaurant ID: {id}</h1>
        <h2>{restaurant.name}</h2>
        <h3>
          {restaurant.area}, {restaurant.city}
        </h3>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
      </div>

      <div className="restaurant-menu-price">
        <h1>Menu</h1>
        {Object.values(restaurant?.menu?.items).map((item) => (
          <div className="restaurant-menu">
            <div>
              <ul className="menu-items">
                <li key={item.id}>{item.name}</li>
              </ul>
            </div>

            <div className="price">
              {item.price ? (
                <ul>
                  <li key={item.id}>{`₹ ${item?.price
                    ?.toString()
                    ?.slice(0, -2)}`}</li>
                </ul>
              ) : (
                <ul>
                  <li key={item.id}>--</li>
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
