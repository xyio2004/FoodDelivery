import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col items-center text-white bg-zinc-800 gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px]'>
      <div className='w-full grid grid-cols-[2fr_1fr_1fr] gap-[80px]'>
        <div className='flex flex-col gap-[20px] items-start'>
            <img src={assets.logo} alt='' />
            <p className='text-[15px]'>There are many variations of hich don't look even age of Lorem Ipsum, you need to be sure there isn't anything embarrassing chunks as necessary, making this the first true generator on the Internet.</p>
            <div className='flex '>
                <img className='w-[40px] mr-[15px] ' src={assets.facebook_icon} alt='' />
                <img className='w-[40px] mr-[15px] ' src={assets.twitter_icon} alt='' />
                <img className='w-[40px] mr-[15px] ' src={assets.linkedin_icon} alt='' />
            </div>
        </div>
        <div className='flex flex-col gap-[20px] items-start'>
            <h2 className='text-white text-[30px] font-semibold '>Company</h2>
            <ul>
                <li className='mb-[10px] list-none cursor-pointer'>Home</li>
                <li className='mb-[10px] list-none cursor-pointer'>About us</li>
                <li className='mb-[10px] list-none cursor-pointer'>Delivery</li>
                <li className='mb-[10px] list-none cursor-pointer'>Privacy Policy</li>
            </ul>
        </div>
        <div className='flex flex-col gap-[20px] items-start'>
            <h2 className='text-white text-[30px] font-semibold '>Get In Touch</h2>
            <ul>
                <li className='mb-[10px] list-none cursor-pointer'>09-254123879</li>
                <li className='mb-[10px] list-none cursor-pointer'>contact@tomato.gmail.com</li>
            </ul>
        </div>
      </div>
      <hr className='w-full h-[2px] my-[20px] text-gray-200 '/>
      <p>Copyright @2024 tomato.com - All Rights reserved.</p>
    </div>
  )
}

export default Footer
