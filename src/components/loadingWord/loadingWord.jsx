
import React from "react";
import {  motion } from "framer-motion";


export const LoadingWord = ({size, word}) => {

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <div> 
     
      <motion.span
          style={{ display: "inline-block" ,  fontSize: `${size}`}}
          initial="hidden"
          animate="visible"
        >
          {Array.from(word).map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              transition={{ delay: index * 0.1, duration: 1, loop: Infinity }} 
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      
      </div>
    </>
  );
};