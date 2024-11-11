import React from "react";
import aboutimg1 from "../img/aboutimg1.jpg";
import aboutimg2 from "../img/aboutimg2.jpg";
import iconabout1 from "../img/iconabout1.svg";
import iconabout2 from "../img/iconabout2.svg";
export default function AboutPart2() {
  return (
    <div className="container flex flex-row items-start justify-around w-full h-[90vh] mt-8  space-x-10 text-white">
      {/* Left Side */}
      <div
        className="relative w-[300px] h-[400px] flex flex-col items-center justify-center"
        data-aos="fade-left"
      >
        <img
          src={aboutimg1}
          alt="img1"
          className="w-[90%] h-[80%] object-cover rounded-lg shadow-lg"
          style={{ position: "relative", zIndex: 1 }}
        />
        <img
          src={aboutimg2}
          alt="img2"
          className="w-[90%] h-[80%] object-cover rounded-lg shadow-lg"
          style={{
            position: "absolute",
            top: "12rem",
            left: "6rem",
            zIndex: 1,
          }}
        />
      </div>

      {/* Right Side Content*/}
      <div
        className="flex flex-col w-1/2 space-y-6 mt-4 text-end tracking-widest"
        data-aos="fade-left"
      >
        <div className="section-title text-left">
          <h3 className="text-3xl font-bold text-yellow-400">About Us</h3>
          <h2 className="text-3xl font-semibold">
            Your trusted partner in reliable car rental
          </h2>
          <p className="mt-4 mb-5">
          At [Brand Name], we believe that renting a car should be simple and convenient. With a fleet of modern vehicles ranging from compact cars to spacious SUVs, we cater to every need and every budget. Our commitment to transparency, reliability,
           and affordability has made us a trusted choice for travelers everywhere.
          </p>
        </div>

        <div className="about-content-body flex flex-col gap-4 tracking-widest">
          <div className="about-trusted-booking flex items-start">
            <img src={iconabout1} alt="icon1" className="icon-box mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-left">Easy booking process</h3>
              <p>Optimized booking for ease and safety.</p>
            </div>
          </div>
          <div className="about-trusted-booking flex items-start">
            <img src={iconabout2} alt="icon2" className="icon-box mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-left">
                Convenient pick-up &amp; return process
              </h3>
              <p>
                Efficient pick-up and return process for a smooth experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
