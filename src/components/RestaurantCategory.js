import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data , showItems , index , setShowIndex}) => {

    const handleClick=()=>{
        setShowIndex(showItems ? null : index) //update parent state
    };

  return (
    <div className="w-8/12 bg-gray-50 mb-4 p-4  shadow-lg">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold">
          {data.title} ({data.items.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems ? <ItemList items={data.items} /> : null}
    </div>
  );
};

export default RestaurantCategory;
