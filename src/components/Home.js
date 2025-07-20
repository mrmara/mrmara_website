import React from 'react';
import './Home.css';
import homepageImg from '../assets/homepage_img.png'; // Import the image
import isDesktop from "../hooks/useMediaQuery"; // Import the custom hook

const Home = () => {
    return (
      <section className="home">
        <div className="home-image-container">
          <img src={homepageImg} alt="Robot" className="home-image" />
        </div>
        {isDesktop() ? (
        <div className="home-container">
          <h1>
            Welcome to my digital space — where robots definitely behave, code
            never crashes, and I absolutely don’t rely on coffee. Ever.
          </h1>
        </div>) : (
        <div className="mobile-home-container">
          <h1>Welcome to my digital space — where robots definitely behave, code
          never crashes, and I absolutely don’t rely on coffee. Ever.</h1>
        </div>
        )}
      </section>
    );
};

export default Home;