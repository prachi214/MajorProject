import { Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./Component/Header/Navbar";
import Home from "./Component/Home/Home";

import Aboutus from "./Component/About/Aboutus";
import Login from "./Component/Login/Login";
import Signup from "./Component/Signup/Signup";
import Buy from "./Component/Buy/Buy";
import Loader from "./Component/Loader";
import Services from "./Component/Services/Services";
import ContactUs from "./Component/contactus/ContactUs";
import CustomFooter from "./Component/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <MantineProvider>
      <div className="app-container min-h-screen flex flex-col">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMax slice"
          className="svg-background"
        >
          {/* SVG Background  */}
          <defs>
            <linearGradient id="bg">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(130, 158, 249, 0.06)" }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "rgba(76, 190, 255, 0.6)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(115, 209, 72, 0.2)" }}
              />
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
                s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity=".3">
              <animateTransform
                attributeName="transform"
                type="translate"
                dur="10s"
                values="270 230; -334 180; 270 230"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".6">
              <animateTransform
                attributeName="transform"
                type="translate"
                dur="8s"
                values="-270 230;243 220;-270 230"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".9">
              <animateTransform
                attributeName="transform"
                type="translate"
                dur="6s"
                values="0 230;-140 200;0 230"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>

        <div className="content-container flex-1">
          {loading ? (
            <div className="flex items-center justify-center min-h-[100vh]">
              <Loader />
            </div>
          ) : (
            <>
              <Navbar />

              <Routes>
                <Route path="/home" element={<Home />} />

                <Route path="/about" element={<Aboutus />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/buy" element={<Buy />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </>
          )}
        </div>

        <CustomFooter />
      </div>
    </MantineProvider>
  );
}

export default App;
