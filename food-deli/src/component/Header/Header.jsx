import React from 'react'

export default function Header() {
  return (
    <div className='relative h-[34vw] my-[30px] mx-auto bg-no-repeat bg-ttuPattern bg-contain'>
      <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-[fadeIn_3s]'>
        <h1 className='text-white text-[65px] font-bold'>Order your favourite food here</h1>
        <p className='text-white text-[15px] '>There are many variations of passages of Lorem Ipsum available,randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
        <button className='border-none font-semibold text-[#747474] text-[20px] bg-white py-[10px] px-[20px] rounded-[50px]'>View Menu</button>
      </div>
    </div>
  )
}
