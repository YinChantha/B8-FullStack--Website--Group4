import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SlArrowRight } from "react-icons/sl";
import Chat from "./Chat";
import SignIn from "./SignIn";

const ChatGPT = () => {
  const [isShow, setIsShow] = React.useState(false);
  const [user, setUser] = React.useState(true);

  return (
    <div className="fixed sm:bottom-5 sm:right-5 bottom-2 right-2 z-[999] ">
      <div
        className="relative cursor-pointer text-white text-4xl flex
        items-end justify-center gap-2"
      >
        {/* buttons */}

        <motion.div
          key="button"
          onClick={() => setIsShow(!isShow) && handleClick()}
          layout
          transition={{ duration: 0.3 }}
          className="bg-red-500 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full hover:bg-red-400 transition-all duration-300 ease-in-out"
        >
          {!isShow && (
            <img
              src="/images/gpt.png"
              className="sm:w-full sm:h-full sm:p-4 w-full h-full p-3"
            />
          )}
          {isShow && (
            <SlArrowRight className="font-bold sm:w-full sm:h-full sm:p-4 w-full h-full p-3" />
          )}
        </motion.div>

        <AnimatePresence>
          {/* chat message */}

          {isShow && (
            <motion.div
              key="chat"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-full right-0 mb-4 sm:h-[550px] bg-gray-400 rounded-lg  shadow-lg shadow-red-200 overflow-hidden"
            >
              {/* chat */}
              {user ? <Chat /> : <SignIn />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChatGPT;
