import React, { useContext } from "react";
import StoreContext from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/Layout/Layout";

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <Layout>
    <div className="mt-[100px]">
      <div>
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-600 text-[20px] font-semibold">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="h-[1px] bg-[#c8c1c1] border-none" />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-600 text-[18px] my-[10px]">
                  <img className="w-[50px]" src={item.image} alt="image" />
                  <p>{item.name}</p>
                  <p>{item.price}$</p>
                  <p className="ml-[20px]">{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}$</p>
                  <p onClick={()=>removeFromCart(item._id)} className="cursor-pointer text-[25px] text-red-400" >x</p>
                </div>
                <hr className="h-[1px] bg-[#c8c1c1] border-none" />
              </div>
            );
          }
        })}
      </div>
      <div className="flex justify-between mt-[80px] gap-[150px]">
        <div className="flex flex-1 flex-col">
          <h2>Cart Total</h2>
            <div>
              <div className="flex justify-between text-[#555]">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()}$</p>
              </div> 
              <div className="flex justify-between text-[#555]">
                <p>Delivery fee</p>
                <p>{getTotalCartAmount()?2:0}$</p>
              </div>
              <div className="flex justify-between text-[#555]">
                <b>Total</b>
                <b>{getTotalCartAmount()?getTotalCartAmount()+2:0}$</b>
              </div>
            </div>
          <button className="text-white bg-red-400 py-[12px] border-none w-[200px] rounded-[4px] cursor-pointer mt-[50px]"
          onClick={()=>navigate('/order')}>PROCEED TO CHECK OUT</button>
        </div>
        <div className="flex-1">
          <div>
            <p className="text-[#555]">If you have a promocode,enter it here.</p>
            <div className="mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
              <input className="bg-transparent pl-[10px] border-none outline-none" type="text" placeholder="promo code"></input>
              <button className="w-[150px] py-[15px] px-[5px] rounded-[4px] bg-black text-white border-none">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </Layout>
  );
};

export default Cart;
