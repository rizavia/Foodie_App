export function filterData(searchText, allRestaurants) {
  const filteredRestaurants = allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filteredRestaurants;
}
