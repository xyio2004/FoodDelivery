
import React from 'react'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='flex flex-col gap-[20px]'>
      <h1 className='text-[40px] font-bold'>Explore Our Menu</h1>
      <p className=' max-w-[60%] text-gray-500 px-[5px] rounded-[10px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
      <div className='flex justify-between items-center gap-[50px] text-center my-[20px] scrollbar overflow-x-scroll '>
        {
            menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>{setCategory(pre=> pre===item.menu_name? "All" :item.menu_name)}} key={index}>
                        <img className={category===item.menu_name?'border-[3px] border-red-500 cursor-pointer min-w-[80px] w-[7.5vw] rounded-[50%] ':'cursor-pointer min-w-[80px] w-[7.5vw] rounded-[50%]'} src={item.menu_image} alt='' />
                        <p className='text-[16px] text-[#747474] mt-[10px] font-semibold cursor-pointer'>{item.menu_name}</p>
                    </div>
                )
            })
        }
      </div>
      <hr className='my-[10px] h-[2px] bg-gray-300 border-none'/>
    </div>
  )
}

export default ExploreMenu
