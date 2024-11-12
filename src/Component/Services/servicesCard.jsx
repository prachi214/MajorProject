import React from "react";
// import  "./servicesCard.css";
import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import privateimg from "../img/privatecar.jpg";

import carairport from "../img/carairport.jpeg";
import privatetransfer from "../img/privatetransfer.jpeg";
import eventtransportation from "../img/eventtransportation.jpg";
import driverimg from "../img/driverimg.jpg";
import chauffeurimg from "../img/chauffeurimg.jpg";
function ServicesCard() {
  const navigate = useNavigate();


  // Data for each card
  const serviceData = [
    {
      id: 1,
      title: "business car rental",
      imgSrc:
      privateimg,
      description: "Whether you need a car for a day, a week, or a month, we offer flexible rental plans to suit any schedule. Our hassle-free rental options make it easy for you to stay on the road as long as you need.",
      badgeText: "On Sale",
    },
    {
      id: 2,
      title: "chauffeur services",
      imgSrc:
      chauffeurimg,
      description: "Our dedicated customer support team is available 24/7 to assist you with any questions or concerns. From booking inquiries to roadside assistance, we’re always just a call or message away.",
      badgeText: "Limited Offer",
    },
    {
      id: 3,
      title: "car rental with driver",
      imgSrc:
   driverimg,
      description: "With our car rental services, you can easily book a car with a driver, ensuring that your trip is hassle-free and safe.",
      badgeText: "New",
    },
    {
      id: 4,
      title: "airport transfer",
      imgSrc:
        carairport,
      description: "We prioritize your safety and peace of mind. Our rental packages include comprehensive roadside assistance to ensure you’re covered in case of any unexpected issues, wherever your journey takes you.",
      badgeText: "Special Offer",
    },
    {
      id: 5,
      title: "Private transfer",
      imgSrc:
      privatetransfer,
      description: "From compact economy cars to spacious SUVs and luxury models, our diverse fleet offers options for every traveler. Explore our selection and choose the vehicle that best fits your trip and budget.",
      badgeText: "Popular",
    },
    {
      id: 6,
      title: "event transportation",
      imgSrc:
      eventtransportation,
      description: "With multiple locations for pick-up and drop-off, we make it convenient for you to start and end your rental wherever suits you best.",
      badgeText: "Best Seller",
    },

  ];

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px", flexDirection: "row", marginLeft : "5rem" }} 
    >
      <div style={{           display: "flex",
          flexWrap: "wrap",
          gap: "20px"}}>
     
          {serviceData.map((slide) => (
            <div key={slide.id} data-aos="flip-right"  >
              <Card shadow="sm" padding="lg" radius="md" withBorder className="w-[400px] h-[550px]">
                <Card.Section>
                  <Image 
                    src={slide.imgSrc}
                    width={50}
                    height={10} 
                    alt={slide.title}
                  />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{slide.title}</Text>
                  <Badge color="pink">{slide.badgeText}</Badge>
                </Group>

                <Text size="sm" color="dimmed" lineClamp={5}>
                  {slide.description}
                </Text>

                <Button
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                  onClick={() => navigate("/signup")}
                >
                  Book now
                </Button>
              </Card>
            </div>
          ))}
     
      </div>
    </div>
  );
}

export default ServicesCard;
