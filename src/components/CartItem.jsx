
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="border-b-2 flex justify-center items-center ">

      <div className="h-[180px] items-start flex ml-8 mt-6">

        <div className="h-[180px] w-[150px] mb-[10px]">
          <img src={item.image} className="w-full h-full"/>
        </div>
        <div className="gap-2 ml-5 h-full  ">
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div className="justify-evenly flex mt-11">
            <p className="text-green-500 font-semibold -ml-5">${item.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
