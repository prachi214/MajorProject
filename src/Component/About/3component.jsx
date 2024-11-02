import React from "react";
import AutoPlay from "./slider";
import { Text } from "@mantine/core";
import { IconTopologyStar3 } from "@tabler/icons-react";
export default function AboutPart3() {
  return (
    <div className="container w-full h-[100vh] items-center justify-center">
      <div className="subheading flex flex-col justify-evenly items-center text-white tracking-widest">
        <div className="text-3xl flex gap-2 items-center !text-yellow-200 font-semibold sm-mx:text-2xl xs-mx:text-xl pb-2">
          <IconTopologyStar3 className="w-10 text-yellow-200 h-10 sm-mx:w-7 sm-mx:h-7" />
          Testimonials
        </div>

   
        <Text size="lg">What our customers are saying about us</Text>
      </div>
      <AutoPlay />
    </div>
  );
}
