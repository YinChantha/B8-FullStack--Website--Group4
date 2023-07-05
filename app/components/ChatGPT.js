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
    <div className="fixed bottom-5 right-5 z-[999] ">
      <div
        className="relative cursor-pointer text-white text-4xl flex
        items-end justify-center gap-2"
      >
        {/* buttons */}

        <motion.div
          key="button"
          onClick={() => setIsShow(!isShow)}
          layout
          transition={{ duration: 0.3 }}
          className="bg-red-500 w-20 h-20 flex items-center justify-center rounded-full hover:bg-red-400"
        >
          {!isShow && (
            <Image
              src="/images/gpt.png"
              alt="chat-image"
              width={42}
              height={42}
            />
          )}
          {isShow && <SlArrowRight />}
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
              className="absolute bottom-full right-0 mb-4 h-[700px] bg-white rounded-lg  shadow-lg overflow-hidden"
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
