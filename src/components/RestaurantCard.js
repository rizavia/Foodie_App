const path =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const RestaurantCard = ({
  cloudinaryImageId,
  avgRating,
  cuisines,
  name,
  slaString,
}) => {
  return (
    <div className="w-60 h-80 mr-7 mb-10 bg-amber-200 shadow-xl rounded-md hover:-translate-y-1 hover:scale-110 hover:opacity-90 duration-300">
      <img src={path + cloudinaryImageId} alt="image" />
      <div className="p-3">
        <div className="font-bold text-xl">{name}</div>
        <div className="truncate my-2 text-gray-500">{cuisines.join(", ")}</div>
        <div className="flex justify-between mt-8">
          <div className="font-bold"> ⭐ {avgRating}</div>
          <div className="font-bold text-green-700">{slaString}</div>
        </div>
      </div>
    </div>
  );
};
