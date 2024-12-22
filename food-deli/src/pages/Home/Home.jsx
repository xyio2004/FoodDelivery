import React, { useState } from 'react'
import Header from '../../component/Header/Header'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay';
import Footer from '../../component/Footer/Footer';
import AppDownload from '../../component/AppDownload/AppDownload';
import Layout from '../../component/Layout/Layout';

const Home = () => {
  const [category,setCategory] =useState("All");
  return (
    <div >
    <Layout >
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
      <AppDownload></AppDownload>
      <Footer></Footer>
    </div>
    </Layout>
    </div>
  )
}

export default Home
