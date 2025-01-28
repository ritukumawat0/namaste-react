import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState , useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";

const RestaurantList = () => {
  const [searchText, setSearchText] = useState("");
  const { listOfRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurantList();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const {loggedInUser,setUserName}=useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="mb-4 flex flex-wrap justify-around">
        <div className="search-bar">
          <input
            type="search"
            data-testid="searchInput"
            placeholder="Search here"
            className="focus:ring-2 p-4 border border-[rgba(202, _209, _209, _0.363)] outline-none text-[1.2rem] placeholder:text-[1.2rem]"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="mx-4 p-4 text-[1.1rem] hover:cursor-pointer border"
            onClick={() => {
              const filteredResaturants = listOfRestaurants.filter((res) => {
                return res.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredResaturants);
            }}
          >
            Search
          </button>
        </div>

        <div>
          <label htmlFor="user">Username : </label>
          <input id="user" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="username" className="focus:ring-2 p-4 border outline-none"/>
        </div>

        <button
          className="p-4 text-[1.1rem] hover:cursor-pointer border"
          onClick={() => {
            let filterdList = listOfRestaurants.filter((restaurant) => {
              return restaurant.avgRating > 4;
            });
            setFilteredRestaurants(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex gap-4 flex-wrap mb-4 ml-2">
        {filteredRestaurants.map((restaurant) => (

          <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
            {
              restaurant.areaName === "Vidhyadhar Nagar" ? (
                <RestaurantCardPromoted res={restaurant} />
              ) : (
                <RestaurantCard res={restaurant}/>
              )
            }
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
