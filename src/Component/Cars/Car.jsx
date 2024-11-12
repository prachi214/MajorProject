import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, Image, Text, Title } from "@mantine/core";
import aboutpagebg from "../img/aboutpagebg.jpg";
import CarList from './carList';
import CarDetails from './carDetails';
import CarType from './carType';

export default function Cars() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
   <>
         <Card
        style={{ marginTop: 12, marginLeft: 80, marginBottom: 18 }}
        className="w-[90vw] items-center justify-center flex flex-col"
      >
        <Card.Section style={{ position: "relative", width: "100%" }}>
          <div
            style={{
              position: "absolute",
              top: "20rem",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              color: "white",
              zIndex: 1,
            }}
            data-aos="fade-up"
          >
            <Title size={70} order={2} style={{ fontWeight: "bold" }}>
   Book your Car!
            </Title>
            <Text size="xl">Welcome to our company</Text>
            <Text size="xl">We strive for excellence in all that we do.</Text>
          </div>
          <Image
            src={aboutpagebg}
            height={100}
            alt="About Us Background"
            fit="cover"
            style={{ borderRadius: 8 }}
            data-aos="fade-in"
          />
        </Card.Section>
      </Card>
       <Routes>
      <Route path="carlist" element={<CarList />} />
      <Route path="cardetails" element={<CarDetails />} />
      <Route path="cartype" element={<CarType />} />
    </Routes>
   </>


  
  );
}




