import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarList from './carList';
import CarDetails from './carDetails';
import CarType from './carType';

export default function Cars() {
  return (
   

      <Routes>
            {/* <div className='text-2xl bg-white'>
      Carcomponent
    </div> */}
        <Route path="/car/carlist" element={<CarList />} />
        <Route path="/car/cardetails" element={<CarDetails />} /> 
        <Route path="/car/cartype" element={<CarType />} />
      
      </Routes>
  
  );
}



