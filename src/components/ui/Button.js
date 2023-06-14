"use client"
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
const Button = ({ onClick, children }) => {
  const [isHovered, setHovered] = useState(false);
  const [isActive, setActive] = useState(false);
  return (
    <motion.button
      className={`
        ${isHovered ? 'shadow-sm' : 'shadow'}
        ${isActive ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}
        rounded-lg px-4 py-2
        transition duration-100 ease-in-out
        flex items-center justify-center
        dark:bg-gray-700 dark:text-white
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setActive(false);
      }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onClick={onClick}
    >
      Button
    </motion.button>
  );
};

export default Button;
