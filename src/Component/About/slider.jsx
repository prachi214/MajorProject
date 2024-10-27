import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

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
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <div style={{ width: "100%" }}>
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <div key={slide.id}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
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
        </Slider>
      </div>
    </div>
  );
}

export default AutoPlay;
