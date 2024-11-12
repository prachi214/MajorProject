import React from 'react';

import { Card } from 'flowbite-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import perfectfleetimg1 from '../img/perfectfleetimg1.png';
import perfectfleetimg2 from '../img/perfectfleetimg2.png';
import perfectfleetimg3 from '../img/perfectfleetimg3.png';
import perfectfleetimg4 from '../img/perfectfleetimg4.png';
import perfectfleetimg5 from '../img/perfectfleetimg5.png';
import perfectfleetimg6 from '../img/perfectfleetimg6.png';


// Array of car data
const carData = [
  {
    id: 1,
    title: 'BMW M2 Car 2017',
    imgSrc: perfectfleetimg1,
    rating: 5.0,
    price: 599,
  },
  {
    id: 2,
    title: 'Audi RS7 Car 2016',
    imgSrc: perfectfleetimg2,
    rating: 4.0,
    price: 500,
  },
  {
    id: 3,
    title: 'Ferrari F12 Car 2022',
    imgSrc: perfectfleetimg3,
    rating: 3.0,
    price: 309,
  },
  {
    id: 4,
    title: 'Toyota Yaris 2017',
    imgSrc: perfectfleetimg4,
    rating: 4.0,
    price: 230,
  },
  {
    id: 5,
    title: 'BMW M2 Car 2017',
    imgSrc: perfectfleetimg5,
    rating: 5.0,
    price: 239,
  },
  {
    id: 6,
    title: 'Audi RS7 Car 2016',
    imgSrc: perfectfleetimg6,
    rating: 2.0,
    price: 200,
  },
  {
    id: 7,
    title: 'Ferrari F12 Car 2022',
    imgSrc: perfectfleetimg3,
    rating: 5.0,
    price: 490,
  },
  {
    id: 8,
    title: 'Audi RS7 Car 2016',
    imgSrc: perfectfleetimg2,
    rating: 2.0,
    price: 220,
  },
  {
    id: 9,
    title: 'Toyota Yaris 2017',
    imgSrc: perfectfleetimg4,
    rating: 5.0,
    price: 550,
  },
];

const CarList = () => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-center"  data-aos="flip-right">
      {carData.map((car) => (
        <Card key={car.id} className="max-w-sm" imgAlt={car.title} imgSrc={car.imgSrc}>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {car.title}
            </h5>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`h-5 w-5 ${index < car.rating ? 'text-yellow-300' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              {car.rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${car.price}</span>
            <a
              href="/signup"
              className="rounded-lg  bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Book Now
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CarList;
