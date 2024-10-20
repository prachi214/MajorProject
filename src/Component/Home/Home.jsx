import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SimpleSlider from "./slider";
import "./slider.css";
import CarComponent from "./firstCarcard";

function Home() {
  return (
    <>
      <div className="slider-container">
        <CarComponent />
        <div className="grid grid-cols-1 ">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <SimpleSlider />
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <SimpleSlider />
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <SimpleSlider />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
