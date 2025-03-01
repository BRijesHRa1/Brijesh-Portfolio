import { useState } from "react";
import { motion } from "framer-motion";

const LoadMore = () => {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <div className="flex flex-col items-center mt-10">
      {showLoader && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative flex w-64 animate-pulse gap-2 p-4"
        >
          <div className="h-24 w-24 rounded-full bg-white"></div>
          <div className="flex-1">
            <div className="mb-1 h-5 w-3/5 rounded-lg bg-white"></div>
            <div className="h-5 w-[90%] rounded-lg bg-white"></div>
          </div>
          <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-white"></div>
        </motion.div>
      )}

      {!showLoader && (
        <motion.button
          onClick={() => setShowLoader(true)}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 1 }}
          animate={{ opacity: showLoader ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="btn w-[140px] h-[40px] flex items-center justify-evenly uppercase tracking-wider relative bg-transparent opacity-60 hover:opacity-100 hover:tracking-widest transition-all duration-200 ease-[cubic-bezier(0.19,1,0.22,1)]"
        >
          See more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="15px"
            width="15px"
            className="icon w-[15px] h-[15px] transform transition-transform duration-200 ease-linear group-hover:translate-x-[30%] animate-attention"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              stroke="#292D32"
              d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
            ></path>
          </svg>
        </motion.button>
      )}
    </div>
  );
};

export default LoadMore;
