import React, { useState } from 'react'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {
  const [currentState,setCurrentState] = useState("Sign Up");
  return (
    <div className='absolute w-full h-full bg-[#00000090] grid z-[1]'>
      <form className='place-self-center flex flex-col gap-[25px] bg-white text-[#808080] max-w-[23vw] 
      py-[25px] px-[30px] rounded-[8px] text-[14px] animate-[fadeIn_0.5s]'>
        <div className='flex justify-between items-center text-black'>
            <h2 className='text-[30px] font-semibold'>{currentState}</h2>
            <img className='w-[20px] cursor-pointer' src={assets.cross_icon} alt="cross" onClick={()=>setShowLogin(false)} />
        </div>
        <div className='flex flex-col gap-[20px]'>
        {currentState==="Sign Up"?<input className='outline-none border-[1px] border-[c9c9c9] border-solid rounded-[4px] p-[10px]' type='text' placeholder='Your Name' required></input>:<></>} 
            <input className='outline-none border-[1px] border-[c9c9c9] border-solid rounded-[4px] p-[10px]' type='email' placeholder='Enter your Email address' required></input>
            <input className='outline-none border-[1px] border-[c9c9c9] border-solid rounded-[4px] p-[10px]' type='password' placeholder='Enter your password' required></input>
        </div>
        <button className='border-none p-[10px] text-[15px] text-white bg-red-400 rounded-[4px] cursor-pointer'>{currentState==="Sign Up"? "Create account" : "Log In"}</button>
        <div className='flex items-start gap-[8px] mt-[-15px]'>
            <input className='mt-[5px]' type='checkbox' required></input>
            <p>By continuing,I agree to the terms of use & privacy policy.</p>
        </div>
        {
            currentState==="Log In"?<p>Create a new account? <span className='cursor-pointer text-red-500 font-semibold' onClick={()=>setCurrentState("Sign Up")}>Click here</span></p> :
            <p>Already have an account? <span className='cursor-pointer text-red-500 font-semibold' onClick={()=>{setCurrentState("Log In")}}>Login here</span></p>
        }
        
      </form>
    </div>
  )
}

export default LoginPopup
