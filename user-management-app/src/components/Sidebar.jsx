import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Button } from "./ui/button";

const sidebarVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: "0%", opacity: 1 },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      initial='hidden'
      animate={isOpen ? "visible" : "hidden"}
      variants={sidebarVariants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white shadow-sidebar transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      } lg:w-64`}
    >
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className='lg:hidden p-4 absolute top-0 right-0 mt-4 mr-4'
      >
        {/* Add your menu icon here */}
      </Button>
      <div className='p-5'>
        <h1 className='text-xl font-bold mb-4'>My App</h1>
        <ul>
          <li className='mb-4'>
            <Link
              to='/'
              className='flex items-center text-white hover:bg-gray-700 p-2 rounded-md transition-all duration-300'
            >
              <FaHome className='mr-3' />
              Home
            </Link>
          </li>
          <li className='mb-4'>
            <Link
              to='/users'
              className='flex items-center text-white hover:bg-gray-700 p-2 rounded-md transition-all duration-300'
            >
              <FaUser className='mr-3' />
              Users
            </Link>
          </li>
          <li className='mb-4'>
            <Link
              to='/settings'
              className='flex items-center text-white hover:bg-gray-700 p-2 rounded-md transition-all duration-300'
            >
              <FaCog className='mr-3' />
              Settings
            </Link>
          </li>
          <li>
            <Button className='flex items-center text-white hover:bg-gray-700 p-2 rounded-md w-full transition-all duration-300'>
              <FaSignOutAlt className='mr-3' />
              Logout
            </Button>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Sidebar;
