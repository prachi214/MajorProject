import React from 'react';
import Pngcar from '../img/Pngcar.png';

const CarComponent = () =>{
  return (
    <div className=" flex flex-col items-center justify-center h-[50vh] mt-8">
 
      <div className="animate-bounce">
        <img
      src={Pngcar}
          alt="Car"
          className="w-72 h-auto"
        />
      </div>
      <h1 className="text-5xl font-bold mb-4  text-white ">The perfect ride is just a tap away!</h1>
      <p className="text-lg mt-4  text-white">welcome to car rent
Looking to save more on
your rental car? </p>
    </div>
  );
};

export default CarComponent;
