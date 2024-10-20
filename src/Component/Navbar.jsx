import React from 'react'
import {NavLink} from 'react-router-dom'
import {IconBikeFilled}  from '@tabler/icons-react'
import Sidebar from './Sidebar'

function Navbar() {
  return (
    <>    
   <header>
    <nav >
   
    <div >


      <ul className="min-h-full w-full flex flex-row  justify-evenly font-medium text-xl  gap-10 p-6 sm:justify-center pn:pr-0 pn:justify-end 
      pn:text-end pn:font-semibold pn:p-0 pn:m-0 pn:text-lg  pn:gap-0  sm:gap-0 sm:pr-3  sm:text-xl md:pr-3  md:justify-center">
    <IconBikeFilled className="z-40" size={68} color='#64FFDA' stroke={1.25} />
      
        <li className='hover:bg-yellow-300 px-4 py-4 rounded-xl'>
          <NavLink to="home" >Home</NavLink>
        </li>
        <li className='hover:bg-yellow-300 px-4 py-4  rounded-xl'>
          <NavLink to="aboutus">About Us</NavLink>
        </li>
        <li className='hover:bg-yellow-300 px-4 py-4  rounded-xl'>
          <NavLink to="services">Services</NavLink>
        </li>

        <li className='hover:bg-yellow-300 px-4 py-4  rounded-xl'>
          <NavLink to="login">Login </NavLink>
        </li>
        <li className='hover:bg-yellow-300 px-4 py-4  rounded-xl'>
          <NavLink to="signup">Sign Up</NavLink>
        </li>

        <li className='hover:bg-yellow-300 px-4 py-4  rounded-xl'>
          <NavLink to="contact">Contact US</NavLink>
        </li>
      </ul>

        </div>

    </nav>
    </header>
    <Sidebar/>
    </>


  )
}

export default Navbar







