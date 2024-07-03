import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>    
   <header>
    <nav >
    <div >
      <ul className="min-h-full w-full flex flex-row  justify-end font-medium text-xl py-3 gap-10 pr-[250px] sm:justify-center pn:pr-0 pn:justify-end 
      pn:text-end pn:font-semibold pn:p-0 pn:m-0 pn:text-lg  pn:gap-0  sm:gap-0 sm:pr-3  sm:text-xl md:pr-3  md:justify-center">
         {/* <img className='h-10 w-10  2xl:hidden xl:hidden lg:hidden md:hidden' src="https://www.iconbolt.com/preview/facebook/dripicons/menu.svg" alt="" /> */}
      {/* <img className='h-[70px] w-[70px] mr-[28rem]' src="https://rentmyride.ch/wp-content/uploads/favicon.png" alt="No internet" /> */}
      <img className='h-10 w-20 2xl:mr-[28rem] xl:mr-0 lg:mr-0 md:mr-0 sm:mr-0 pn:w-10 pn:h-8 pn:mr-0' src="https://th.bing.com/th/id/OIP.empgW1YJ3sQE-8MkChmOdgAAAA?rs=1&pid=ImgDetMain" alt="" />
      
        <li className='hover:bg-blue-300 px-4 pb-2 rounded-xl'>
          <NavLink to="home" >Home</NavLink>
        </li>
        <li className='hover:bg-blue-300 px-3 pb-2 rounded-xl'>
          <NavLink to="aboutus">About Us</NavLink>
        </li>
        <li className='hover:bg-blue-300 px-4 pb-2 rounded-xl'>
          <NavLink to="help">Help</NavLink>
        </li>
        <li className='hover:bg-blue-300 px-4 pb-2 rounded-xl'>
          <NavLink to="login">Login </NavLink>
        </li>
        <li className='hover:bg-blue-300 px-4 pb-2 rounded-xl'>
          <NavLink to="signup">Sign Up</NavLink>
        </li>
      </ul>
        </div>

    </nav>
    </header>
    </>


  )
}

export default Navbar