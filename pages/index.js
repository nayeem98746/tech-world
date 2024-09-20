import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainLayout from '../Components/MainLayout/MainLayout'
import { home_pageMeta } from '../DataSetStatic/HomePage/data_home'
import { productStaticCategory } from '../DataSetStatic/common/productCategories'


export default function Home() {
  return (
     <>
     <MainLayout pageMeta={home_pageMeta}> 
      
         
     </MainLayout>
     </>
  )
}


// export const getStaticProps = async(context) =>{

//   const categoriesRes = await getProductCategories();

//   const categories = categoriesRes.length > 0 ? categoriesRes : productStaticCategory;

// }