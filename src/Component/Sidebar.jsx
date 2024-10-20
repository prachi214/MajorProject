// Sidebar.jsx
import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>

      <Burger
        opened={opened}
        onClick={toggle}
        className="md:hidden"
        size="lg"
        color="#64FFDA"
      />

  
      <Drawer
        opened={opened}
        onClose={toggle}
        size="45vw"
        position="right"
        radius="md"
        className="md:hidden"
      >
        <div className="flex justify-end p-4">
  
          <IconX onClick={toggle} size={32} color="white" className="cursor-pointer" />
        </div>
        <Drawer.Body className="mt-10 flex flex-col gap-8">
          <NavLink to="home" onClick={toggle} className="text-lg hover:text-yellow-300">
            Home
          </NavLink>
          <NavLink to="aboutus" onClick={toggle} className="text-lg hover:text-yellow-300">
            About Us
          </NavLink>
          <NavLink to="getstarted" onClick={toggle} className="text-lg hover:text-yellow-300">
            Get Started
          </NavLink>
          <NavLink to="login" onClick={toggle} className="text-lg hover:text-yellow-300">
            Login
          </NavLink>
          <NavLink to="signup" onClick={toggle} className="text-lg hover:text-yellow-300">
            Sign Up
          </NavLink>
        </Drawer.Body>
      </Drawer>
    </>
  );
}

export default Sidebar;
