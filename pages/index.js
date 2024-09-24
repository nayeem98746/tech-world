import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainLayout from '../Components/MainLayout/MainLayout'
import { home_pageMeta } from '../DataSetStatic/HomePage/data_home'
 import HomeCarosel from '../Components/HomePageComponent/HomeCarosel'
import FeaturedCategory from '../Components/HomePageComponent/FeaturedCategory'
  

export default function Home() {
  return (
     <>
     <MainLayout pageMeta={home_pageMeta}> 
        
     <HomeCarosel></HomeCarosel>
      <FeaturedCategory />
  
      </MainLayout>
     </>
  )
}


// export const getStaticProps = async(context) =>{

//   const categoriesRes = await getProductCategories();

//   const categories = categoriesRes.length > 0 ? categoriesRes : productStaticCategory;

// }