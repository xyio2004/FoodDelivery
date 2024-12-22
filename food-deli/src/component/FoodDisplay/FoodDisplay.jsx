import React, { useContext } from 'react'

import FoodItem from '../FoodItem/FoodItem'
import StoreContext from '../../Context/StoreContext'

const FoodDisplay = ({category}) => {
     const{food_list} = useContext(StoreContext)
     console.log('food',food_list)
  return (
    <div className='mt-[30px]'>
      <h2 className='text-[40px] font-semibold '>Top dishes near you</h2>
      <div className='grid grid-cols-4 gap-[30px] gap-y-[50px] mt-[30px]'>
        { 
            food_list.map((item)=>{
            
              if(category ==="All" || category===item.category){ 
                   return <FoodItem item={item} key={item._id} id={item._id}></FoodItem>
              }
             
            })
        }
      </div>
    </div>
  )
}

export default FoodDisplay
