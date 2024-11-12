import React from 'react';
import '../styles/Banner.css';

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Membresía Premium</h1>
        <div className="banner-buttons">
          <button className="banner-button">Suscribirse</button>
          <button className="banner-button discover">Descubrir Planes</button>
        </div>
      </div>
      <div className="banner-content-image">
        <img src={require("../assets/95a5a39101008908e55b86f5bc9136f9.png")} alt="Banner" className="banner-image" />
      </div>
    </div>
  );
};

export default Banner;