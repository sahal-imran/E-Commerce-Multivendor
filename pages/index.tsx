import type { NextPage } from 'next';
import React from 'react';
import Slider from '../components/Client/Home/Hero/Slider';
import Features from '../components/Client/Home/Features/Features';
import Categories from '../components/Client/Home/Categories/Categories';
import PopularCategory from '../components/Client/Home/PopularCategory/PopularCategory';
import ShopByBrand from '../components/Client/Home/ShopByBrand/ShopByBrand';
import TopRatesProducts from '../components/Client/Home/TopRatesProducts/TopRatesProducts';
import BestSellers from '../components/Client/Home/BestSellers/BestSellers';
import FeaturedProducts from '../components/Client/Home/FeaturedProducts/FeaturedProducts';
import NewArrivals from '../components/Client/Home/NewArrivals/NewArrivals';
import BestProducts from '../components/Client/Home/BestProducts/BestProducts';
import Subscribe from '../components/Shared/Subscribe/Subscribe';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Slider />
      <Features />
      <Categories />
      <PopularCategory />
      <ShopByBrand />
      <TopRatesProducts />
      <BestSellers />
      <FeaturedProducts />
      <NewArrivals />
      <BestProducts />
      <Subscribe />
    </React.Fragment>
  )
}

export default Home
