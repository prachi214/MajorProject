"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function CustomFooter() {
  const socialIcons = [
    {
      href: "https://flowbite-react.com/docs/components/footer",
      icon: BsFacebook,
    },
    { href: "#", icon: BsInstagram },
    { href: "#", icon: BsTwitter },
    { href: "#", icon: BsGithub },
    { href: "#", icon: BsDribbble },
  ];
  return (
    <Footer bgDark className="mt-auto">
      <div className="w-full">
        <div className="grid w-full grid-cols-4 gap-8 px-6 py-8 md:grid-cols-6 text-white text-bold ">
          <div>
            <Footer.Title title="Company" className="text-yellow-300" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Car Fleet</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Help Center" className="text-yellow-300" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Discord Server</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" className="text-yellow-300" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Services" className="text-yellow-300" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">FAQS</Footer.Link>
              <Footer.Link href="#">Pricing</Footer.Link>
              <Footer.Link href="#">Locations</Footer.Link>
              <Footer.Link href="#">Your Booking</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>

        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-around">
          <Footer.Copyright
            href="#"
            by="CarServices"
            year={2024}
            className="text-white text-center"
          />

          <div className="mt-4 flex justify-around sm:mt-0 sm:justify-center space-x-6">
            {socialIcons.map(({ href, icon: Icon }, index) => (
              <a
                key={index}
                href={href}
                className="text-white transition duratioetext-yellow-300 ease-in-out hover:text-lime-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  size={24}
                  className="hover:scale-125 transition-transform duratioetext-yellow-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Footer>
  );
}
