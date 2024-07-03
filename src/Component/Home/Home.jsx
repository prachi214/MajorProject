import React from 'react'
import facebook from '../img/facebook.svg'
import linkedin from '../img/linkedin.svg'
import insta from '../img/insta.svg'
import twiter from '../img/twiter.svg'
import youtube from '../img/youtube.svg'
import arrowforward from '../img/arrowforward.svg'
import {Link, useNavigate} from 'react-router-dom'


function Home() {
  const navigate=useNavigate()
 function goToBuy(){
  navigate("/buy")
 }
  return (
<>
<div className='overflow-hidden bg-cover block'>
<div className='flex justify-left'>
<div className='mt-[18rem] absolute 2xl:ml-[4rem] xl:ml-[4rem] lg:ml-[4rem] md:ml-[10rem] sm:ml-[10rem] font-bold w-64 h-14'>
  <p className=' rounded-2xl bg-white bg-opacity-30 w-64 h-26 '>Welcome to our blog where we explore the top-notch collection 
  of car rental website templates. Whether you are a car rental agency looking to revamp your online presence or an aspiring
   entrepreneur venturing into the car rental industry, we have handpicked the best templates that will cater to your needs.</p>
   </div>

<img className='w-full  h-full  ' src="https://www.mychoize.com/blog/wp-content/uploads/2021/02/4-Reasons-why-a-Car-Rental-is-better-for-a-Family-Road-Trip-1.jpg" alt="" />
{/* <img className='h-[70%] w-[70%] ' src="https://www.hdcarwallpapers.com/walls/nissan_gt_r_white-wide.jpg" alt="" /> */}
</div>

<main className=" flex justify-center ">
   <img className='w-full h-[30rem]   ' src="https://th.bing.com/th/id/OIP.tMqMvkqSSsQO0yuDXhJ4PQAAAA?rs=1&pid=ImgDetMain" alt="" />
      <div className=' absolute flex   justify-center py-10 mb-10 mt-20 border-black bg-black bg-opacity-30 w-[48rem] h-[20rem] font-medium border-2 rounded-lg hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] sm:w-[35rem] pn:w-[28rem]  pn:mr-4'>
    <form className=' '  action="">
        <div className=' mb-7 flex justify-center pn:px-7'>
        <label className=' text-white ml-[80px] ' htmlFor="city">City</label>
       <select className=' ml-3 px-5 pn:h-7 pn:w-30 rounded-md border-2 border-blue-900'  name="city"  id="">
        <option  value=""  >Choose City</option>
        <option value="city-name">jaipur</option>
        <option value="city-name">jabalpur</option>
        <option value="city-name">nagpur</option>
        <option value="city-name">bhopal</option>
        <option value="city-name">nainpur</option>
       </select>
       <label className='text-white pl-5' htmlFor="location">Location</label>
       <input className='ml-3 px-1 pn:px-0 pn:w-28 sm:w-28 rounded-md border-2 border-blue-900 pn:w-30 pn:mr-7  pn:ml-0' type="location" placeholder='location' />
        </div>
      
      <div className='flex justify-center ml-24 pn:ml-0 '>
         <label  className='mt-3 text-white pn:ml-12 sm:ml-7 sm:hidden pn:hidden' htmlFor="date ">Picking up Date</label>
         <label className='2xl:hidden xl:hidden lg:hidden md:hidden text-white mt-[12px] ' htmlFor="">From</label>
       <input className='mr-6 ml-2 mt-3 text-center  sm:h-7  pn:ml-0 pn:pl-0 pn:h-7 pn:w-40 rounded-md border-2 border-blue-900' type="date"  />
       <label className='mt-3 text-white pn:pl-0 sm:hidden pn:hidden' htmlFor="date">Droping up Date</label>
       <label className='2xl:hidden xl:hidden lg:hidden md:hidden text-white mt-[14px]' htmlFor="">To</label>
       <input className='mr-6 ml-2 text-center pn:mt-4 pn:h-7 pn:w-20 pn:mr-7 pn:ml-0 h-7 mt-3 rounded-md border-2 border-blue-900 ' type="date" /></div>
          
      <button onClick={goToBuy} className='bg-sky-600 px-9  mt-[5rem] ml-[15rem] text-white font-bold hover:font-extrabold  flex py-1 rounded-md ' >Go<img className='pl-2 pt-1' src={arrowforward} alt="" /> </button> 
      
    </form>
      </div>

  </main>

<footer className='bg-blue-900'>
  <ul className='bg-blue-900 text-zinc-300 py-10 grid gap-6 grid-cols-5 grid-rows-3  pn:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center '>
   
    <li className='cursor-pointer hover:text-white'>Home</li>
    <li className='cursor-pointer hover:text-white'>About Us</li>
    <li className='cursor-pointer hover:text-white'>Services</li>
    <li className='cursor-pointer hover:text-white'>Car Fleet</li>
    <li className='cursor-pointer hover:text-white'>Locations</li>
    <li className='cursor-pointer hover:text-white'>My Booking</li>
    <li className='cursor-pointer hover:text-white'>Help Enter</li>
    <li className='cursor-pointer hover:text-white'>Review</li>
    <li className='cursor-pointer hover:text-white'>Contact Us</li>
    <li className='cursor-pointer hover:text-white'>Terms & Conditions</li>
    <li className='cursor-pointer hover:text-white'>Privacy Policy</li>
    <li className='cursor-pointer hover:text-white'>Travel Partners</li>
    <li className='cursor-pointer hover:text-white'>Pricing</li>
    <li className='cursor-pointer hover:text-white'>Blog</li>
    <li className='cursor-pointer hover:text-white'>FAQs</li>
    </ul>
    <div className='h-7 w-7 flex  '>
    <img className='cursor-pointer  2xl:ml-[13rem] pn:ml-[2rem] md:ml-[5rem] xl:ml-[5rem] lg:ml-[5rem] ' src={facebook} alt="" />
    <img className='cursor-pointer  ml-2' src={linkedin} alt="" />
    <img className='cursor-pointer  ml-5' src={insta} alt="" />
    <img className='cursor-pointer  ml-5' src={twiter} alt="" />
    <img className='cursor-pointer  ml-5' src={youtube} alt="" />

  </div>

</footer>
</div>
</>
  )
}

export default Home