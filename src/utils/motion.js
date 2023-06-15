"use client"
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TypingText = ({ children }) => {
 
  return (
    <motion.div initial={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
};

export  {TypingText}