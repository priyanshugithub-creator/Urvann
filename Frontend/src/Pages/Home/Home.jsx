import React from 'react'
import Layout from '../../Component/Layout/Layout'
import Carousel from '../../Component/Other/Carousel/Carousel'
import PopularCateg from '../../Component/Other/PopularCateg/PopularCateg'
import Carousel2 from '../../Component/Other/Carousel2/Carousal2'
import Carousel3 from '../../Component/Other/Carousel2/Carousel3'




const Home = () => {
  return (
    <Layout>
      <Carousel />
      <PopularCateg/>
      <Carousel3/>
      {/* <Carousel2/> */}
    </Layout>
  )
}

export default Home