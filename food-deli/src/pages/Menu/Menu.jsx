import React, { useState } from 'react'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay';
import Layout from '../../component/Layout/Layout';

const Menu = () => {
  const [category,setCategory] =useState("All");
  return (
    <Layout>
    <div >
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
    </div>
    </Layout>
  )
}

export default Menu
