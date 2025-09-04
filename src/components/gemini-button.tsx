"use client";
import React from "react";
import { SiGooglegemini } from "react-icons/si";
import { motion } from "motion/react";
import { useSummaryStore } from "@/store/useSummaryStore"; // Adjust the import based on your project structure
import { generateSummaryContent } from "@/lib/actions"; // Adjust the import based on your project structure

const GeminiButton = ({ content }: { content: string }) => {
  const { setGeneratedSummary, setIsGenerating, isGenerating } = useSummaryStore();

  const handleGenerateSummary = async (content: string) => {
    setGeneratedSummary(""); 
    setIsGenerating(true);
    try {
      const summary = await generateSummaryContent(content);
      setGeneratedSummary(summary);
      setIsGenerating(false);
    } catch (error) {
      console.log("Failed to generate summary:", error);
      setIsGenerating(false);
    }
  };

  // if (isGenerating) {  
  //   return (
  //     <motion.div
  //       whileHover={{ rotate: 360, scale: 1.4 }}
  //       whileTap={{ scale: 0.9 }}
  //       className="text-[#b97084]"
  //     >
  //       <button disabled title="Generating Summary...">
  //         <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6"></div>
  //       </button>
  //     </motion.div>
  //   );
  //  }

  return (
    <motion.div
      whileHover={{ rotate: 360, scale: 1.4 }}
      whileTap={{ scale: 0.9 }}
      className="text-[#b97084]"
    >
      <button onClick={() => handleGenerateSummary(content)} disabled={isGenerating} title="Generate Summary with Gemini">
        <SiGooglegemini size={26} />
      </button>
    </motion.div>
  );
};

export default GeminiButton;
