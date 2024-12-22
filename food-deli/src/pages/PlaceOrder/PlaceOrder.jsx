import React, { useContext } from 'react'
import StoreContext from '../../Context/StoreContext'
import Layout from '../../component/Layout/Layout';

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <Layout>
    <form className='flex justify-between items-start mt-[100px] gap-[50px] '>
      <div className='w-full max-w-[500px]'>
        <h2 className='text-[30px] font-semibold mb-[50px]'>Delivery Information</h2>
        <div className='flex gap-[10px]' >
          <input className='w-full mb-[15px] p-[10px] border-solid border-[#c5c5c5] border-[1px] rounded-[4px] outline-red-400' type='text' placeholder='First Name'></input>
          <input className='w-full mb-[15px] p-[10px] border-solid border-[#c5c5c5] border-[1px] rounded-[4px] outline-red-400' type='text' placeholder='Last Name'></input>
        </div>
        <input className='w-full mb-[15px] p-[10px] border-solid border-[#c5c5c5] border-[1px] rounded-[4px] outline-red-400' type='email' placeholder='Enter your Email Address'></input>
        <input className='w-full mb-[15px] p-[10px] border-solid border-[#c5c5c5] border-[1px] rounded-[4px] outline-red-400' type='text' placeholder='Street'></input>
        <div  className='flex gap-[10px]' >
          <input className='w-full mb-[15px] p-[10px] border-solid border-[#c5c5c5] border-[1px] rounded-[4px] outline-red-400' type='text' placeholder='City'></input>
          <input className='w-full mb-[15px] p-[10px] border-solid border-[#c5c5c5] border-[1px] rounded-[4px] outline-red-400' type='text' placeholder='State'></input>
        </div>
        <div  className='flex gap-[10px]' >
          <input className='w-full mb-[15px] p-[10px] border-solid border-[#c5c5c5] border-[1px] rounded-[4px] outline-red-400' type='text' placeholder='Zip code'></input>
          <input className='w-full mb-[15px] p-[10px] border-solid border-[#c5c5c5] border-[1px] rounded-[4px] outline-red-400' type='text' placeholder='Country'></input>
        </div>
        <input className='w-full mb-[15px] p-[10px] border-solid border-[#c5c5c5] border-[1px] rounded-[4px] outline-red-400' type='text' placeholder='Phone'></input>
      </div>
      <div className='w-full max-w-[500px]'>
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
          <button className="text-white bg-red-400 py-[12px] border-none w-[200px] rounded-[4px] cursor-pointer mt-[70px]">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
    </Layout>
  )
}

export default PlaceOrder
