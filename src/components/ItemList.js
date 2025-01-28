import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList=({items})=>{
    // console.log(items)

    const dispatch=useDispatch();

    const handleItem=(item)=>{
        // dispatch an action
         dispatch(addItem(item));
    }

    return(
        <div>
            {items.map((item)=>{
                 return <div data-testid="foodItems" key={item.id} className="p-2 m-4 border-b-2 flex justify-between">
                    <div className="w-9/12">
                        <h2 className="font-semibold leading-8">{item.name}</h2>
                        {console.log(item)}
                        <p className="leading-8 font-medium">Price - ₹ {item.price || item.defaultPrice}</p>
                        <p className="text-zinc-700">{item.description}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleItem(item)} className={`${item.imageId?"absolute":""} bg-black text-white px-2 py-1`}>Add +</button>
                        {item.imageId ? <img className="w-32 h-24 rounded-lg" src={CDN_URL + item.imageId} alt={item.name} /> : null}
                    </div>
                </div>
            })}
        </div>
    )
}

export default ItemList;