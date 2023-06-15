'use client'
import { motion, useScroll, useTransform, useLayoutEffect   } from 'framer-motion';

const Heading = ({ children, center }) => {

 

  return (
    <motion.h2  className={`text-3xl font-bold text-gray-900 dark:text-gray-200 lg:text-4xl text-center md:text-left font-unbounded ${center ? 'text-center md:text-center' : ''}  `}>
      {children}
    </motion.h2>
  )
}

export { Heading }