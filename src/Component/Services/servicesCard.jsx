import React from "react";

import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function ServicesCard() {
  const navigate = useNavigate();


  // Data for each card
  const serviceData = [
    {
      id: 1,
      title: "Norway Fjord Adventures",
      imgSrc:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
      description: "Explore the magical fjord landscapes with tours.",
      badgeText: "On Sale",
    },
    {
      id: 2,
      title: "Beautiful Swiss Alps",
      imgSrc:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
      description: "Take in breathtaking views from the stunning Swiss Alps.",
      badgeText: "Limited Offer",
    },
    {
      id: 3,
      title: "Sunny Beaches of Maldives",
      imgSrc:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
      description: "Relax on the pristine beaches of the Maldives.",
      badgeText: "New",
    },
    {
      id: 4,
      title: "Wildlife Safari in Africa",
      imgSrc:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
      description: "Experience the thrilling African wildlife safari.",
      badgeText: "Special Offer",
    },
    {
      id: 5,
      title: "The Northern Lights in Iceland",
      imgSrc:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
      description: "Witness the magical northern lights in Iceland.",
      badgeText: "Popular",
    },
    {
      id: 6,
      title: "Grand Canyon, USA",
      imgSrc:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",
      description: "Explore the vast landscapes of the Grand Canyon.",
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
            <div key={slide.id} data-aos="flip-right" >
              <Card shadow="sm" padding="lg" radius="md" withBorder className="w-[400px] h-[400px]">
                <Card.Section>
                  <Image
                    src={slide.imgSrc}
                    height={100} 
                    alt={slide.title}
                  />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{slide.title}</Text>
                  <Badge color="pink">{slide.badgeText}</Badge>
                </Group>

                <Text size="sm" color="dimmed">
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
