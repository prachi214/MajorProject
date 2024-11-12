import React from 'react';
import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Button, Group } from "@mantine/core";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import luxurycollectionimg1 from "../img/luxurycollectionimg1.jpg";
import luxurycollectionimg2 from "../img/luxurycollectionimg2.jpg";
import luxurycollectionimg3 from "../img/luxurycollectionimg3.jpg";
import luxurycollectionimg4 from "../img/luxurycollectionimg4.jpg";
import luxurycollectionimg5 from "../img/luxurycollectionimg5.jpg";
import luxurycollectionimg6 from "../img/luxurycollectionimg6.jpg";

function CarType() {
  const navigate = useNavigate();


  // Data for each card
  const carTypeData = [
    {
      id: 1,
      title: "Sport Car",
      imgSrc:
    luxurycollectionimg1,

    },
    {
      id: 2,
      title: "Sedan Car",
      imgSrc:
    luxurycollectionimg3,
    },
    {
      id: 3,
      title: "Convertible Car",
      imgSrc:
    luxurycollectionimg2,
    },
    {
      id: 4,
      title: "Electric Car",
      imgSrc:
    luxurycollectionimg5,
    },
    {
      id: 5,
      title: "Luxury Car",
      imgSrc:
    luxurycollectionimg4,
    },
    {
      id: 6,
      title: "Coupe Car",
      imgSrc:
    luxurycollectionimg6,
    },

  ];
  return(
  <div
  style={{ display: "flex", justifyContent: "center", marginTop: "50px", flexDirection: "row", marginLeft : "5rem" }} 
>
  <div style={{           display: "flex",
      flexWrap: "wrap",
      gap: "20px"}}>
 
      {carTypeData.map((slide) => (
        <div key={slide.id} data-aos="flip-right"  >
          <Card shadow="sm" padding="lg" radius="md" withBorder className="w-[400px] h-[650px]">
            <Card.Section>
              <Image 
                src={slide.imgSrc}

                alt={slide.title}
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>{slide.title}</Text>
           
              <Button
              color="blue"
              fullWidth
              radius="md"
              onClick={() => navigate("/signup")}
            >
              Book now
            </Button>
            </Group>


          </Card>
        </div>
      ))}
 
  </div>
</div>
  );
}

export default CarType;