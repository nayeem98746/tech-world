import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainLayout from '../Components/MainLayout/MainLayout'
import { home_pageMeta } from '../DataSetStatic/HomePage/data_home'

export default function Home() {
  return (
     <>
     <MainLayout pageMeta={home_pageMeta}>    
     </MainLayout>
     </>
  )
}
