import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

import customer2 from "../img/customer2.png";
import customer3 from "../img/customer3.jpg";
import customer4 from "../img/customer4.png";
function AutoPlay() {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: true,
  };

  // Data for each card
  const slidesData = [
    {
      id: 1,
      title: "Sanjna Johnson",
      imgSrc:
      customer4,
      description: "Amazing experience! The car was clean, comfortable, and exactly as described. The whole process was smooth and convenient. Will definitely rent again!",
   
    },
    {
      id: 2,
      title: "Mike Anderson",
      imgSrc:
      customer2,
      description: "The booking process was easy, and I loved the variety of cars available. Pick-up and drop-off were hassle-free. Highly recommended!",
   
    },
    {
      id: 3,
      title: "Jessica Lee",
      imgSrc:
      customer3,
      description: "Rented an SUV for a weekend trip. The vehicle was well-maintained and reliable. Customer service was prompt in answering my queries.",
 
    },
    {
      id: 4,
      title: "Devi Brown",
      imgSrc:
      customer4,
      description: "Affordable rates and excellent service. The car was in perfect condition, and there were no hidden fees. I’d recommend it to my friends!",
  
    },
    {
      id: 5,
      title: "Emily Clark",
      imgSrc:
      customer2,
      description: "Overall, a good experience. The car had a minor dent, but the service agent was upfront about it. The rest was great!",
 
    },
    {
      id: 6,
      title: " Jason White",
      imgSrc:
      customer3,
      description: "Loved the luxury sedan I rented! The car felt brand new, and the rental process was seamless. A premium experience!",
  
    },
  ];

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <div style={{  width: "90%", maxWidth: "1200px", margin: "0 auto" }}>
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <div key={slide.id}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src={slide.imgSrc}
                    width={100} 
                    height={100} 
                  
                    alt={slide.title}
                  />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{slide.title}</Text>
                  {/* <Badge color="pink">{slide.badgeText}</Badge> */}
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
        </Slider>
      </div>
    </div>
  );
}

export default AutoPlay;
