import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { useNavigate } from "react-router-dom";
import { Button, Card, Text } from "@mantine/core";

export default function Slider2() {
  const navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cardData = [
    {
      title: "its 2nd slider 🤗",
      content:
        "We aim to make car rental easy, affordable, and accessible for everyone, empowering users with the freedom to explore and enjoy their journey.Rent a car effortlessly. Affordable, flexible, and hassle-free rides at your fingertips Your satisfaction is our priority. From the moment you browse our website to the final drop-off, our friendly support team is here to assist you at every step. Got a question or concern? We’re just a call away!",
    },
    {
      title: "How It Works?",
      content:
        "Browse: Find the perfect vehicle from a wide range of models.Book: Choose your preferred time, date, and location.Drive: Pick up your car or get it delivered. Enjoy the ride!Your satisfaction is our priority. From the moment you browse our website to the final drop-off, our friendly support team is here to assist you at every step. Got a question or concern? We’re just a call away!",
    },
    {
      title: "Choose from Our Bestsellers",
      content:
        "Tesla Model 3 – Eco-friendly and smart tech integration.BMW X5 – Luxury SUV, ideal for families and road trips.Toyota Camry – Reliable and comfortable for long drives.Jeep Wrangler – Perfect for adventure and off-road trails.Your satisfaction is our priority. From the moment you browse our website to the final drop-off, our friendly support team is here to assist you at every step. Got a question or concern? We’re just a call away!",
    },
    {
      title: "Why Rent with Us?",
      content:
        "Affordable Pricing: No hidden fees. Pay only what you see.Flexible Booking: Cancel or modify bookings hassle-free.Wide Selection of Cars: From economy to luxury vehicles.24/7 Support: Our team is always ready to help you.Your satisfaction is our priority. From the moment you browse our website to the final drop-off, our friendly support team is here to assist you at every step. Got a question or concern? We’re just a call away!",
    },
    {
      title: "See What Our Customers Say",
      content:
        "No matter the occasion, we’ve got you covered. From compact city cars for quick errands to luxurious sedans for special events, and spacious SUVs for family adventures, our wide range of vehicles ensures you find the perfect match.Your satisfaction is our priority. From the moment you browse our website to the final drop-off, our friendly support team is here to assist you at every step. Got a question or concern? We’re just a call away!",
    },
    {
      title: "Flexible Booking Options",
      content:
        "Enjoy your journey without worrying about hidden fees. We pride ourselves on offering transparent and competitive pricing, with no unpleasant surprises at checkout. Rent with us confidently, knowing you’re getting the best value for your money.Your satisfaction is our priority. From the moment you browse our website to the final drop-off, our friendly support team is here to assist you at every step. Got a question or concern? We’re just a call away!",
    },
  ];

  return (
    <div className="w-[70vw] mt-32  flex flex-col space-y-8 border-4 rounded-br-lg p-8  bg-red-200 rounded-t-lg  transition-transform duration-300 ease-in-out hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#e7f52c] md:max-w-2xl md:m-10">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white flex p-4 justify-center items-center"
          >
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <h1 className="text-4xl font-bold text-center text-black pb-2">
                  {card.title}
                </h1>
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
        className="!text-black text-bold bg-stone-50 p-4 pr-4 border border-primaryColor rounded-full !w-40 cursor-pointer !text-center transition-transform duration-300ms ease-in-out hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#3b3535] hover:!bg-yellow-300"
      >
        Book Now
      </Button>
    </div>
  );
}
