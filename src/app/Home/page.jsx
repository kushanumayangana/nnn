import React from 'react';
import FeaturedItems from '../components/homepage/FeaturedItems';
import PromoBanner from '../components/homepage/PromoBanner';
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const HomePage = () => {
  return (
    <div>
      <Header/>
        <PromoBanner />
        <FeaturedItems />
      <Footer/>
    </div>
  );
};

export default HomePage;
