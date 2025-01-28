import { RESTAURANTS_API } from "../utils/constants";
import { useState, useEffect } from "react";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    // console.log("API Data:", JSON.stringify(json, null, 2)); 

    let restaurants = [];
    for (let i = 0; i < json.data.cards.length; i++) {
      const card = json.data.cards[i];
      if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
        restaurants = card.card.card.gridElements.infoWithStyle.restaurants;
        break;
      }
    }
    const allRestaurants = restaurants.map((res) => {
      return {
        id: res?.info?.id,
        name: res?.info.name,
        cloudinaryImageId: res?.info?.cloudinaryImageId,
        locality: res?.info?.locality,
        areaName: res?.info?.areaName,
        costForTwo: res?.info?.costForTwo,
        cuisines: res?.info?.cuisines,
        avgRating: res?.info?.avgRating,
      };
    });

    setListOfRestaurants(allRestaurants);
    setFilteredRestaurants(allRestaurants);
  };

  return { listOfRestaurants, filteredRestaurants, setFilteredRestaurants };
};

export default useRestaurantList;
