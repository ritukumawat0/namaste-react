import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { res } = props;
  const {loggedInUser}=useContext(UserContext)
  const {
    cloudinaryImageId,
    name,
    costForTwo,
    avgRating,
    cuisines,
    areaName,
    locality,
  } = res;
  return (
    <div data-testid="resCard" className="w-72 border border-[#75747495] hover:shadow-[rgba(51,_51,_51,_0.5)_1px_1px_5px]">
      <img
        className="w-full h-60 object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt="cusine-img"
      />
      <div className="p-2 px-4 min-h-[20rem]">
        <h3 className="mb-4">{name}</h3>
        <p className="mb-4">
          {costForTwo} <br /> <br />
          <span>Rating - {avgRating}stars</span>
        </p>
        <p className="mb-4">Cuisines : {cuisines.join(", ")}</p>
        <p className="mb-4">Area : {areaName}</p>
        <p className="mb-4">Locality : {locality}</p>
        <p>User : {loggedInUser}</p>
      </div>
    </div>
  );
};

// Higher order component

// input - RestaurantCard ==> output - RestaurantCardPromoted

export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
      return (
        <div>
          <label className="absolute text-lg bg-black  p-1 px-2 text-white">Promoted</label>
          <RestaurantCard {...props} />
        </div>
      )
    }
}

export default RestaurantCard;
