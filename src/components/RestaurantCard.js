const path =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const RestaurantCard = ({
  cloudinaryImageId,
  avgRating,
  cuisines,
  name,
  user,
}) => {
  return (
    <div className="w-60 h-80 mr-7 mb-10 bg-amber-200 shadow-xl rounded-md hover:-translate-y-1 hover:scale-110 hover:opacity-90 duration-300">
      <img src={path + cloudinaryImageId} alt="image" />
      <div className="card-text">
        <h3 className="restuarant-name">{name}</h3>
        <div className="text">{cuisines.join(", ")}</div>
        <div className="rating"> ⭐ {avgRating}</div>
        {/* <h3>{user.wife}</h3>
        <h3>{user.husband}</h3> */}
      </div>
    </div>
  );
};
