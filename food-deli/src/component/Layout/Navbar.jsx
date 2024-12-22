import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import{Link, NavLink} from 'react-router-dom'
import StoreContext from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {
 const{getTotalCartAmount} = useContext(StoreContext)
  return (
    <div  className='bg-black'>
    <div className='py-[20px] flex items-center justify-between'>
      <Link to='/'><img src={assets.logo} alt='Logo' className='w-[100px] xl:w-[150px] lg:w-[140px] md:w-[120px] sm:w-[150px]'></img></Link>
        <nav className='flex gap-[20px] text-[18px] text-[#49557e] lg:gap-[20px] text-[10px]] md:gap-[15px] text-[16px]] '> 
                <NavLink to='/' className={({isActive})=> isActive? 'pb-[2px] border-b-[2px] border-solid border-violet-800': undefined}>Home</NavLink> 
                <NavLink to='/menu' className={({isActive})=> isActive? 'pb-[2px] border-b-[2px] border-solid border-violet-800': undefined}>Menu</NavLink>
                <NavLink to='/mobileApp' className={({isActive})=> isActive? 'pb-[2px] border-b-[2px] border-solid border-violet-800': undefined}>Mobile app</NavLink>
                <NavLink to='/contactUs' className={({isActive})=> isActive? 'pb-[2px] border-b-[2px] border-solid border-violet-800': undefined}>Contact us</NavLink>
        </nav>
      <div className='flex items-center gap-[40px] lg:gap-[30px] md:gap-[20px]'>
        <img className='lg:w-[22px] md:w-[]20px' src={assets.search_icon}></img>
        <div className='relative'>
            <NavLink to='/cart'><img src={assets.basket_icon}></img></NavLink>
            <div className={getTotalCartAmount()? 'absolute min-w-[10px] min-h-[10px] bg-red-400 -top-[8px] -right-[8px] rounded-xl':""}></div>
        </div>
        <button className='bg-transparent text-[16px] text-[#49557e] border-[1px] 
        border-solid border-red-400 rounded-[50px] px-[30px] py-[10px] cursor-pointer duration-[0.3s]
        hover:bg-[#fff4f2]' onClick={()=>{setShowLogin(true)}}>Sign In</button>
      </div>
    </div>
    </div>
  )
}

export default Navbar
