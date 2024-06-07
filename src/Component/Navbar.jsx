import React from 'react'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <header>
    <nav  >
    <div >
      <ul className="  min-h-full w-full flex flex-row  justify-end  font-bold text-xl py-5 gap-10 pr-[250px] border-2  border-slate-400 sm:justify-center pn:pr-0 pn:justify-end 
      pn:text-end pn:font-semibold pn:p-0 pn:m-0 pn:text-lg  pn:gap-0  sm:gap-0 sm:pr-3  sm:text-xl md:pr-3  md:justify-center ">
         {/* <img className='h-10 w-10  2xl:hidden xl:hidden lg:hidden md:hidden' src="https://www.iconbolt.com/preview/facebook/dripicons/menu.svg" alt="" /> */}
      {/* <img className='h-[70px] w-[70px] mr-[28rem]' src="https://rentmyride.ch/wp-content/uploads/favicon.png" alt="No internet" /> */}
      
        <li className=' hover:bg-zinc-400 px-4 pb-2 rounded-xl'>
          <NavLink to="home" >Home</NavLink>
        </li>
        <li className='hover:bg-zinc-400 px-3 pb-2 rounded-xl'>
          <NavLink to="aboutus">About Us</NavLink>
        </li>
        <li className='hover:bg-zinc-400 px-4 pb-2 rounded-xl'>
          <NavLink to="help">Help</NavLink>
        </li>
        <li className='hover:bg-zinc-400 px-4 pb-2 rounded-xl'>
          <NavLink to="login">Login </NavLink>
        </li>
        <li className='hover:bg-zinc-400 px-4 pb-2 rounded-xl'>
          <NavLink to="signup">Sign Up</NavLink>
        </li>
      </ul>
        </div>

    </nav>
    </header>
  )
}

export default Navbar