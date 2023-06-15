"use client"
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";
import { ImSun } from 'react-icons/im'
import { TbMoonStars } from 'react-icons/tb'

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


const DarkModeButton = () => {

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <>
      <motion.div className="p-1.5 text-lg cursor-pointer " onClick={handleThemeChange} >
        {theme === "dark" ? (
          <motion.span>
            <ImSun className='text-gray-100' />
          </motion.span>
        ) : (
          <motion.span>
            <TbMoonStars className='text-gray-700' />
          </motion.span>
        )}
      </motion.div>
    </>
  )
}


export { Button, DarkModeButton };
