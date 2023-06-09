"use client"
import React from "react";
import { motion } from "framer-motion";

const Button = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      style={{
        background: "#F3F3F3",
        color: "#333",
        borderRadius: "8px",
        padding: "12px 24px",
        fontSize: "16px",
        border: "none",
        cursor: "pointer",
        outline: "none",
      }}
    >
      Click Me
    </motion.button>
  );
};

export default Button;
