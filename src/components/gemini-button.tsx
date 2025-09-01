"use client";
import React from "react";
import { SiGooglegemini } from "react-icons/si";
import { motion } from "motion/react";

const GeminiButton = () => {
  return (
    <motion.div
      whileHover={{ rotate: 360, scale: 1.4 }}
      whileTap={{ scale: 0.9 }}
      className="text-[#b97084]"
    >
        <button onClick={() => console.log("clicked")}>
            <SiGooglegemini size={26} />
        </button>

    </motion.div>
  );
};

export default GeminiButton;
