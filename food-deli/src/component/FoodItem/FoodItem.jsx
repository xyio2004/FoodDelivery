import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import StoreContext from '../../Context/StoreContext';

const FoodItem = ({item,id}) => {
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className='w-[100%] m-auto shadow-2xl animate-[fadeIn_1s] rounded-[15px]'>
      <div className='relative'>
        <img className='w-[100%]  rounded-t-[15px] rounded-b-[15px] src={item.image}'src={item.image} alt='image'/>
          {
            !cartItems[id] ? <img className='absolute bottom-[15px] right-[15px] w-[35px] rounded-[50%] cursor-pointer' 
            onClick={()=>addToCart(id)} src={assets.add_icon_white} alt='icon'/> 
            : <div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[5px] rounded-[50px] bg-white'>
              <img className='w-[30px] ' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt='plus'/>
                {cartItems[id]}
              <img className='w-[30px] ' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt='minus'/>
              </div>
          }
      </div>
      <div className='p-[20px]'>
        <div className='flex justify-between items-center m-b-[10px] '>
            <p className='text-[20px] font-semibold'>{item.name}</p>
            <img className='w-[70px]' src={assets.rating_starts} alt='rating start'/>
        </div>
        <p className='text-[14px] text-gray-500 mt-4'>{item.description}</p>
        <p className='text-red-400 text-[20px] font-semibold my-5'>{item.price}$</p>
      </div>
    </div>
  )
}

export default FoodItem
