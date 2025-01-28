import RestaurantList from "./RestaurantList";
import useOnlineState from "../utils/useOnlineState";

const Body = () => {
  const isOnline = useOnlineState();
  return isOnline ? (
    <div className="mt-32">
      <RestaurantList />
    </div>
  ) : (
    alert("you are offline")
  );
};

export default Body;
