import React from 'react';

const CarComponent = () =>{
  return (
    <div className=" flex flex-col items-center justify-center h-[50vh] bg-gray-100">
 
      <div className="animate-bounce">
        <img
      src='https://images.javatpoint.com/top10-technologies/images/top-10-small-cars-in-india1.jpg'
          alt="Car"
          className="w-72 h-auto"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4  text-black ">The perfect ride is just a tap away!</h1>
      <p className="text-lg mt-4  text-black">your jounery Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
    </div>
  );
};

export default CarComponent;
