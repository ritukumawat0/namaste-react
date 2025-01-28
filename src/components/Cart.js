import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => { 
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch=useDispatch();
  const handleClearCart=()=>{
    dispatch(clearCart());
  }
//   console.log(cartItems);
  return (
    <div className="m-4 p-4 mt-32">
      <h1 className="text-center  text-2xl font-bold">cart</h1>
      {cartItems.length===0 && <h1 className="p-4 w-6/12 mx-auto m-4 font-semibold bg-teal-100">Your cart is empty. Add Items to the Cart</h1>}
      <div className="w-6/12">
        <button onClick={handleClearCart} className="mx-6 p-2 text-right bg-black text-white font-semibold rounded-md">Clear Cart</button>
        
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
