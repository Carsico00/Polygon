// src/pages/Home.tsx
import React from 'react';
import FeaturedWorks from '../components/ FeaturedWorks';
import Banner from '../components/Banner';
import NavbarComponent from '../components/NavbarComponent';
import '../styles/Home.css';
const Home: React.FC = () => {
  return (
    <div className='body'>
      <NavbarComponent />
      <main className="main-content">
      <Banner />
      <FeaturedWorks />
    
      </main>
    </div>
  );
}

export default Home;