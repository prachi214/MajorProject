// import React from 'react'

// export default function ContactUs() {
//   return (
//     <div>
//       contact
//     </div>
//   )
// }


"use client";

import { Button, Drawer, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";

export default function ContactUs(){
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* <div className="flex min-h-[50vh] items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Show contact form</Button>
      </div> */}
      <Drawer isOpen={isOpen} onClose={handleClose} className="w-[50rem] m-auto rounded-md  hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#e7f52c]">
        <Drawer.Header title="CONTACT US" titleIcon={HiEnvelope} />
        <Drawer.Items>
          <form action="#">
            <div className="mb-6 mt-3">
              <Label htmlFor="email" className="mb-2 block">
                {/* email */}
              </Label>
              <TextInput id="email" name="email" placeholder="enter your email" type="email" />
            </div>
            <div className="mb-6">
              <Label htmlFor="subject" className="mb-2 block">
                Subject
              </Label>
              <TextInput id="subject" name="subject" placeholder="Let us know how we can help you" />
            </div>
            <div className="mb-6">
              <Label htmlFor="message" className="mb-2 block">
                Your message
              </Label>
              <Textarea id="message" name="message" placeholder="Your message..." rows={4} />
            </div>
            <div className="mb-6">
              <Button type="submit" className="w-full">
                Send message
              </Button>
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <a href="mailto:info@company.com" className="hover:underline">
               carrental@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a href="tel:2124567890" className="hover:underline">
             123-456-7890
              </a>
            </p>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}



