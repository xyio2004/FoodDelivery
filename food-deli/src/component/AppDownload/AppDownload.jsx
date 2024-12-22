import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='text-[40px] font-bold m-auto mt-[100px] text-center '>
      <p>For Better Experience Download  <br/> Tomato App</p>
      <div className='flex justify-center gap-[2vw] mt-[40px] '>
        <img className='max-w-[180px] w-max-[30vw_120px] cursor-pointer m-w hover:scale-[1.05]' src={assets.play_store} alt='' />
        <img className='max-w-[180px] w-max-[30vw_120px] cursor-pointer m-w hover:scale-[1.05]' src={assets.app_store} alt='' />
      </div>
    </div>
  )
}

export default AppDownload
