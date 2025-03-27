import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1>Explore the World, One Country at a Time.</h1>
          <p className="paragraph">
            Discover the history, culture, and beautry of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img
            src="/public/images/world.png"
            alt="world"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
