import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, Image, Text, Title } from "@mantine/core";
import aboutpagebg from "../img/aboutpagebg.jpg";
import ServicesCard from "./servicesCard";
import ServicesPart3 from "./3rdPart";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>

    <div>
      <Card
        style={{ marginTop: 12, marginLeft: 80 }}
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
         Our Services
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
   
    </div>

<ServicesCard />
<ServicesPart3 />
   
    </>
  )
}
