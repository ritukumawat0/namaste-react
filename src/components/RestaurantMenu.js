import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuInfo = useRestaurantMenu(resId);
  const[showIndex,setShowIndex]=useState(null);

  return menuInfo === null ? (
    <Shimmer />
  ) : (
    <div className="mt-32">
      <h1 className="text-center font-bold">{menuInfo.restaurantInfo.name}</h1>
      <div className="w-8/12 mx-auto text-center">
        <span className="leading-8">
          <strong>area name</strong> - {menuInfo.restaurantInfo.areaName} ,
        </span> &nbsp;
        <span>
          <strong>cost for two</strong> -{" "}
          {menuInfo.restaurantInfo.costForTwoMessage} (
          {menuInfo.restaurantInfo.totalRatingsString})
        </span>
        <p>
          <strong>cuisines</strong> -{" "}
          {menuInfo.restaurantInfo.cuisines.join(", ")}
        </p>
      </div>
      <div className="mt-[3rem] flex flex-col justify-center items-center">
        {menuInfo.menuItems.map((data, index) => (
          // controlled component
          <RestaurantCategory
            key={data.title}
            data={data}
            index={index}
            setShowIndex={setShowIndex} //lifting state up
            showItems={index === showIndex} //parent decides visibility
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

