
import { ContainerLoad } from "./loadingStyle";
import React from "react";
import {  motion } from "framer-motion";
import { LoadingWord } from "../loadingWord/loadingWord";


export const LoadingComponent = () => {

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <ContainerLoad>        
      <div style={{ width: "20px", height: "20px", margin: "15px auto" }}>
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",              
              backgroundImage: "linear-gradient(180deg, #9fbb68 50%, #9fbb68 50%)",
              background: "none",            
            
            }}
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],          
              border: ["1px solid #9fbb68", "15px solid #686c78", "1px solid #9fbb68"],
              
              
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
          
        </div>
        <LoadingWord size="12px" word={"Carregando operadoras..."}/>
      
      </ContainerLoad>
    </>
  );
};
