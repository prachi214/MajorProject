import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SimpleSlider from "./slider";
import Slider2 from "./slider2";
import "./slider.css";
import CarComponent from "./firstCarcard";
import Slider3 from "./slider3";

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
            <Slider2 />
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Slider3 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
