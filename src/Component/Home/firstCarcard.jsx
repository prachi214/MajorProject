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
      <h1 className="text-3xl font-bold mb-4  text-white ">The perfect ride is just a tap away!</h1>
      <p className="text-lg mt-4  text-white">your jounery Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
    </div>
  );
};

export default CarComponent;
