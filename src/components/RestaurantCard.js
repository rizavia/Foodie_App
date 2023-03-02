const path =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const RestaurantCard = ({
  cloudinaryImageId,
  avgRating,
  cuisines,
  name,
}) => {
  return (
    <div className="card">
      <img src={path + cloudinaryImageId} alt="image" />
      <div className="card-text">
        <div className="restuarant-name">{name}</div>
        <div className="text">{cuisines.join(", ")}</div>
        <div className="rating"> ⭐ {avgRating}</div>
      </div>
    </div>
  );
};
