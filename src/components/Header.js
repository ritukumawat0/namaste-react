import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineState from "../utils/useOnlineState";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineState();

  const {loggedInUser}=useContext(UserContext);
  // console.log(loggedInUser)

  const cartItems=useSelector((store)=>store.cart.items);

  return (
    <div className="flex items-center justify-between fixed top-0 left-0 right-0 px-4 py-2 z-50 shadow-md bg-green-100">
      <div className="flex-grow">
        <Link to='/'>
          <img src={LOGO_URL} alt="Logo" className="w-20" />
        </Link>
      </div>
      <div className="flex-grow">
        <ul className="flex flex-wrap justify-center space-x-6">  
          <li>Online Status : {isOnline ? "✅" : "🔴"}</li>        
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
          </li>
          <li>
            <Link to="#" className="hover:underline">Menu</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:underline">Cart ({cartItems.length} items)</Link>
          </li>
        </ul>
      </div>

      <div className="flex-grow justify-end flex">
        <ul className="flex flex-wrap
         space-x-4">
          <li>{btnName==="Logout" && loggedInUser}</li>
          <li>
            <button
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
              className="hover:underline"
            >
              {btnName}
            </button>
          </li>
          <li>
            <button className="hover:underline">Signup</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
