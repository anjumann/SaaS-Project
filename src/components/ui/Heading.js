'use client'
import { motion, useScroll, useTransform, useLayoutEffect   } from 'framer-motion';

const Heading = ({ children, center }) => {

  const handleScroll = () => {


    // const { scrollY  } = useScroll()
    // // const scrollTop = useTransform(scrollY, [0, document.body.clientHeight], [0, 1])
    // const translateY = scrollY * 2; // Adjust the multiplier to control the parallax effect intensity

    // const style = {
    //   y: {`$useTransform(translateY, [0, window.innerHeight], ["0%", "100%"])`}
    // };

    // return style;
  };

  return (
    <motion.h2  className={`text-xl ${center ? 'text-center' : ''} font-bold text-gray-900 sm:text-3xl font-unbounded `}>
      {children}
    </motion.h2>
  )
}

export { Heading }