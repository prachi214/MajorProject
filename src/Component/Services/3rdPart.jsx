import React from "react";
import iconpartner1 from "../img/iconpartner1.svg";
import iconpartner2 from "../img/iconpartner2.svg";
import iconpartner3 from "../img/iconpartner3.svg";
import iconpartner4 from "../img/iconpartner4.svg";

import { Text } from "@mantine/core";
import { IconTopologyStar3 } from "@tabler/icons-react";
export default function ServicesPart3() {
  return (
    <div className="container w-full h-[100vh] items-center justify-center mt-20 mb-4">
      <div className="subheading flex flex-col justify-evenly items-center text-white tracking-widest">
        <div className="text-3xl flex gap-2 items-center !text-yellow-200 font-semibold sm-mx:text-2xl xs-mx:text-xl pb-2">
          <IconTopologyStar3 className="w-10 text-yellow-200 h-10 sm-mx:w-7 sm-mx:h-7" />
          executive partners
        </div>

   
        <Text size="3rem" className="mb-10">Trusted by leading brands</Text>
      </div>
<div data-aos="fade-up" className="grid grid-cols-4 gap-20 items-center  mt-12 ml-24">
<div>
                      <img src={iconpartner1} alt="icon1"/>

                    </div>
                    <div>
                      <img src={iconpartner4} alt="icon4"/>

                    </div>
                    <div>
                      <img src={iconpartner3} alt="icon3"/>

                    </div>
                    <div>
                      <img src={iconpartner2} alt="icon2"/>

                    </div>
                    <div>
                      <img src={iconpartner4} alt="icon4"/>

                    </div>
                    <div>
                      <img src={iconpartner2} alt="icon2"/>

                    </div>
                    <div>
                      <img src={iconpartner1} alt="icon1"/>

                    </div>
                    <div>
                      <img src={iconpartner4} alt="icon4"/>

                    </div>

</div>

             


    </div>
  );
}
