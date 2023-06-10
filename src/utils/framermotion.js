"use client"
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TypingText = ({ children }) => {
  const [currentText, setCurrentText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    let timeout;

    const typeText = (text, currentIndex) => {
      timeout = setTimeout(() => {
        setCurrentText(text.substring(0, currentIndex + 1));

        if (currentIndex === text.length - 1) {
          setIsTypingComplete(true);
        } else {
          typeText(text, currentIndex + 1);
        }
      }, 50); // Decreased typing delay to make it faster
    };

    typeText(children, 0);

    return () => clearTimeout(timeout);
  }, [children]);

  useEffect(() => {
    if (isTypingComplete) {
      controls.start({ opacity: 1 });
    }
  }, [controls, isTypingComplete]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={controls}>
      {currentText}
    </motion.div>
  );
};

export  {TypingText}