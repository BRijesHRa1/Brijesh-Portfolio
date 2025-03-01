import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        <span className="typing-effect">Software Engineer</span>
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-[#D4D4D4] font-bold uppercase"
      >
        Brijesh <br className="sm:hidden md:block" />
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        Passionate Software Engineer with 3+ years <br /> of experience in scalable solutions, full-stack development, <br /> and machine learning, seeking opportunities to drive innovation. 🚀
      </motion.p>

      {/* Add CSS for typing effect */}
      <style>
        {`
          .typing-effect {
            display: inline-block;
            overflow: hidden;
            border-right: 0.15em solid orange; /* Cursor effect */
            white-space: nowrap;
            margin: 0 auto;
            letter-spacing: 0.15em;
            animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
          }

          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }

          @keyframes blink-caret {
            from, to {
              border-color: transparent;
            }
            50% {
              border-color: orange;
            }
          }
        `}
      </style>
      <div className="flex justify-center md:justify-start mt-4">
        <button
          className="cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 w-[150px]"
        >
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            ></path>
          </svg>
        </button>

        
      </div>
      {/* Logo's */}
      <div className="flex justify-center md:justify-start mx-3 ">
      <div className=" flex items-center justify-center gap-4">
          <a
            href="mailto:brijeshrai0721@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-150 text-[#D14836]"
          >
            <MdEmail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/brijesh-rai-120712129/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-150 text-[#0077B5]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/BRijesHRa1/Music-Genre-Classification-using-GTZAN"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-150 "
          >
            <FaGithub />
          </a>
      </div>
      </div>
      
    </div>
  );
};

export default HeroText;