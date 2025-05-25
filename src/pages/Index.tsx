
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedBooks from '../components/FeaturedBooks';
import RecentReviews from '../components/RecentReviews';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturedBooks />
      <RecentReviews />
      <Footer />
    </div>
  );
};

export default Index;
