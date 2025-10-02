import React from "react";
import { motion } from "framer-motion"
function Marquee({ imagesurl,direction }) {
  return (
    <div className=" w-full flex overflow-hidden py-1 ">
      <motion.div initial={{x:direction === "left"?"0":"-150%"}} animate={{x:direction==="left"?"-150%":"0"}} transition={{ease:"linear",duration:20,repeat:Infinity}} className="  flex gap-5 flex-shrink-0 py-2 pr-30">
        {imagesurl.map((url, index) => (
          <motion.div key={index} className=" flex justify-center">
            <img
              src={url}
              alt="logo"
              className="h-16 w-full min-w-[200px] object-contain bg-white rounded p-1"
            />
          </motion.div>
        ))}
      </motion.div>  
      <motion.div initial={{x:direction === "left"?"0":"-150%"}} animate={{x:direction==="left"?"-150%":"0"}} transition={{ease:"linear",duration:20,repeat:Infinity}} className="  flex gap-5 flex-shrink-0 py-2 pr-30">
        {imagesurl.map((url, index) => (
          <motion.div key={index} className=" flex justify-center">
            <img
              src={url}
              alt="logo"
              className="h-16 w-full min-w-[200px] object-contain bg-white rounded p-1"
            />
          </motion.div>
        ))}
      </motion.div>  
    </div>
  );
}

export default Marquee;
