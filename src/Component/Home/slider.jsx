import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; 
import { useNavigate } from "react-router-dom";
import {Button, Card, Text } from '@mantine/core'; 

export default function SimpleSlider() {
  const navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  const cardData = [
    {
      title: "Hello Users 🤗",
      content: "We aim to make car rental easy, affordable, and accessible for everyone, empowering users with the freedom to explore and enjoy their journey.Rent a car effortlessly. Affordable, flexible, and hassle-free rides at your fingertips"
    },
    {
      title: "How It Works?",
      content: "Browse: Find the perfect vehicle from a wide range of models.Book: Choose your preferred time, date, and location.Drive: Pick up your car or get it delivered. Enjoy the ride!"
    },
    {
      title: "Choose from Our Bestsellers",
      content: "Tesla Model 3 – Eco-friendly and smart tech integration.BMW X5 – Luxury SUV, ideal for families and road trips.Toyota Camry – Reliable and comfortable for long drives.Jeep Wrangler – Perfect for adventure and off-road trails."
    },
    {
      title: "Why Rent with Us?",
      content: "Affordable Pricing: No hidden fees. Pay only what you see.Flexible Booking: Cancel or modify bookings hassle-free.Wide Selection of Cars: From economy to luxury vehicles.24/7 Support: Our team is always ready to help you."
    },
    {
      title: "See What Our Customers Say",
      content: "The whole process was smooth and straightforward. Highly recommended!"
    },
    {
      title: "Card 6",
      content: "This is the sixth card content. Customize it according to your needs."
    }
  ];

  return (
    <div className="w-[50vw]  flex flex-col space-y-8 border-4 rounded-br-lg p-8  bg-red-200 rounded-t-lg  transition-transform duration-300 ease-in-out hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#e7f52c] md:max-w-2xl md:m-10">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="bg-white flex justify-center items-center p-4">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <h1 className="text-4xl font-bold text-center text-black pb-2">{card.title}</h1>
                <Text c="dimmed" className="!text-black text-center" size="lg">
                  {card.content}
                </Text>
              </Card.Section>
            </Card>
          </div>
        ))}
      </Slider>
      <Button
          fullWidth
          onClick={() => navigate("/signup")}
          variant="filled"
          size="md"
          radius="md"
   className="text-black text-bold bg-stone-50 p-4 pr-4 border border-primaryColor rounded-full !w-40 cursor-pointer !text-center transition-transform duration-300ms ease-in-out hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#3b3535] hover:!bg-yellow-300"
        >
     GET STARTED
        </Button>
    </div>
  );
}
