import React from "react";
"use client";



import { useDisclosure } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";
import { Drawer, Burger } from "@mantine/core";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <div className="xl:hidden lg:hidden md:hidden">
        <Burger size="lg" color="#64FFDA" opened={opened} onClick={toggle} />
      </div>
      <Drawer.Root
        size="45vw"
        position="left"
        radius="md"
        opened={opened}
        onClose={toggle}
        className="md:hidden"
      >
        <Drawer.Overlay
          style={{ backgroundOpacity: 0.5, blur: 4 }}
          opacity={0}
        />
        <Drawer.Content bg="#444453" h={"70vh"}>
          <div className="flex justify-end p-4">
            <IconX
              onClick={toggle}
              size={32}
              color="white"
              className="cursor-pointer"
            />
          </div>
          <Drawer.Body className="mt-10 flex flex-col gap-8 text-center">
            <NavLink
              to="/home"
              onClick={toggle}
              className="text-white text-lg hover:text-yellow-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={toggle}
              className="text-white text-lg hover:text-yellow-300"
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              onClick={toggle}
              className="text-white text-lg hover:text-yellow-300"
            >
              Services
            </NavLink>
            <NavLink
              to="/car"
              onClick={toggle}
              className="text-white text-lg hover:text-yellow-300"
            >
          Car

            </NavLink>
            <NavLink
              to="/login"
              onClick={toggle}
              className="text-white text-lg hover:text-yellow-300"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              onClick={toggle}
              className="text-white text-lg hover:text-yellow-300"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/contact"
              onClick={toggle}
              className=" text-white text-lg hover:text-yellow-300"
            >
              Contact Us
            </NavLink>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
};

export default Sidebar;
