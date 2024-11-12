import React from 'react';
import { Text } from "@mantine/core";
import { IconTopologyStar3 } from "@tabler/icons-react";
function CarDetails() {
  return (
    <div className="subheading flex flex-col justify-evenly items-center  text-white tracking-widest h-[100vh]">

    <div className="text-3xl flex gap-2 items-center !text-yellow-200 font-semibold sm-mx:text-2xl xs-mx:text-xl pb-2">
      <IconTopologyStar3 className="w-10 text-yellow-200 h-10 sm-mx:w-7 sm-mx:h-7" />
      General information
    </div>
    <div className='ml-5 flex-row float-start text-white tracking-widest'>
    <Text size="2rem" className='tracking-widest !text-yellow-300'>Know about our car service!</Text>
    <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias amet error, quibusdam est deserunt recusandae minus consequatur ducimus dolores adipisci quisquam cumque possimus pariatur accusantium atque iusto. Consequuntur a nesciunt harum similique possimus quasi, tenetur minima aliquam voluptatem quam nulla porro praesentium sint asperiores vero laborum eaque! Culpa quisquam, deleniti laudantium iste nobis repellendus dolorem neque blanditiis cupiditate delectus.</p>
    <ul className='tetx-left mt-3'>
      <li>💮24/7 Roadside Assistance</li>
      <li>💮Free Cancellation & Return</li>
      <li>💮Rent Now Pay When You Arrive</li>
    </ul>
    </div>

    <div className="text-3xl flex gap-2 items-center !text-yellow-200 font-semibold sm-mx:text-2xl xs-mx:text-xl ">
      <IconTopologyStar3 className="w-10 text-yellow-200 h-10 sm-mx:w-7 sm-mx:h-7" />
      Amenities
    </div>
 
    <div className='ml-5 flex-row text-white tracking-widest'>
    <Text size="2rem" className='tracking-widest !text-yellow-300 text-center'>Premium amenities and features</Text>

<div className='grid grid-cols-4 gap-10 mt-8'>
<p>✅ Music System</p>
<p>✅ Full boot space</p>
<p>✅ Power Steering</p>
<p>✅ Toolkit</p>
<p>✅ USB Charger</p>
<p>✅ Power Windows</p>
<p>✅ ABS System</p>
<p>✅ AUX Input</p>

</div>
    </div>  




  </div>
  );
}

export default CarDetails;