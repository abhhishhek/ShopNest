import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="flex w-full justify-center items-center gap-x-8">
  {
    cart.length > 0  ? 
    (<div className="flex justify-between items-center gap-[100px]">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col items-center justify-between h-full mt-4 ">

        <div className="flex flex-col justify-between items-start mb-[150px] mr-7">
          <div className="text-green-700 font-semibold text-md ">Your Cart</div>
          <div className="text-green-900 font-semibold text-[30px] -mt-2 -mb-2">Summary</div>
          <p className="font-semibold">
            Total Items: <span className="font-bold">{cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col mt-[150px]">
          <p className="font-semibold">Total Amount: <span className="font-bold">${totalAmount}</span></p>
          <button className="bg-green-700 text-white font-semibold rounded-lg hover:scale-110 hover:bg-green-900 border-lg hover:shadow-lg p-1">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="h-screen justify-center items-center flex flex-col mx-auto">
      <h1  className="font-semibold ">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-700 rounded-full text-white p-1 px-3 uppercase font-semibold">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
