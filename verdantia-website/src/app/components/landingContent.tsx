// components/LandingPage.tsx

"use client"

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Navbar from "./navbar";
import JobPostForm from "@/app/components/jopPostForm";
import {useRouter} from "next/navigation";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';

interface LandingPageProps {
  heading: string;
  subheading?: string;
  buttonText?: string;
}   

const LandingPage: React.FC<LandingPageProps> = ({ heading, subheading, buttonText }) => {
  const [headingPart1, headingPart2] = heading.split('\\n');
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const [user] = useAuthState(auth);
  useEffect(() => {
    setIsVisible(true);
  }, []);


  const [isOpen, setIsOpen] = useState(false);
  const toggleJopAppPopUp = () => {
    if (buttonText === 'Post Application'){
      setIsOpen(!isOpen);
      router.push('#popUp')
    }
    if (buttonText === 'Join the Team'){
      if (user){
        router.push('/jobs')
      }
      else{
        router.push('/signIn')
      }
     
    }
      
  }


  return (
    <div>
      <div className="absolute inset-0 w-screen h-screen bg-center bg-cover" style={{ backgroundImage: `url('/images/background-cropped.png')`, zIndex: -1, height: '37vw'}}></div>
      <Navbar />
      <div className="container py-[1vw] text-white relative z-10 mx-[4vw]">
        <AnimatePresence>
          {!isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 0, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[60vw] mb-[1vw]"
              style={{ fontFamily: 'Enriqueta', color: '#3E3E3E', fontSize: '7vw', lineHeight: '8vw' }}
            >
              <div>&nbsp;</div> {/* Placeholder for headingPart1 */}
              <div>&nbsp;</div> {/* Placeholder for headingPart2 */}
            </motion.div>
          )}
          {!isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg mb-[2vw]"
              style={{ fontFamily: 'Bellota Text', color: '#3E3E3E', fontSize: '2.1vw', lineHeight: '3vw' }}
            >
              &nbsp; {/* Placeholder for subheading */}
            </motion.div>
          )}
          {!isVisible && buttonText && (
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.button

              whileHover={{ scale: 1.5 }} // Instant hover grow animation
              className="bg-gray-700 text-white font-semibold px-[1.5vw] py-[0.5vw] rounded hover:bg-gray-800 shadow-lg"
              style={{
                fontFamily: 'Bellota Text',
                fontSize: '1.4vw',
                backgroundColor: '#3E3E3E',
                borderRadius: '25px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.7)',
              }}
            >
              {buttonText}
            </motion.button>
          </motion.div>
          )}
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[#3e3e3e] text-[9vw] sm:text-[6vw] sm:ml-[0vw] sm:mb-[0vw] mb-[1vw] "
              // style={{ fontFamily: 'Enriqueta', color: '#3E3E3E', fontSize: '7vw', lineHeight: '8vw' }}
              style={{fontFamily: 'Enriqueta'}}
              >
              {headingPart1 && <div>{headingPart1}</div>}
              {headingPart2 && <div>{headingPart2}</div>}
            </motion.div>
          )}
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-[7vw] flex justify-center items-center ml-[-15vw] text-center text-[#3e3e3e] mt-[8vw] sm: mt-[.1vw] sm: ml-[0.8vw] sm:text-[2vw] sm:mb-[2vw]"
              // style={{ fontFamily: 'Bellota Text', color: '#3E3E3E', fontSize: ' 100vw sm:2.1vw', lineHeight: '3vw' }}
              style={{fontFamily: "Bellota Text"}}
          >
              {subheading}
            </motion.div>
          )}
          {isVisible && buttonText && (
          <motion.button
            onClick={toggleJopAppPopUp}
            whileHover={{ scale: 1.1, transition: {duration: 1, delay: 0} }} // Scale up by 10% on hover
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }} // Transition for initial and animate
            className="bg-gray-700 text-white font-semibold sm:px-[1.5vw] py-[0.5vw]   ml-[24vw] sm:ml-[1vw] text-[#3e3e3e] mt-[5vw] p-[4vw] flex items-center justify-center rounded-[28vw] rounded hover:bg-gray-800 shadow-lg"
            style={{
              fontFamily: 'Bellota Text',
              // fontSize: '1.4vw',
              // backgroundColor: '#3E3E3E',
              // borderRadius: '25px',
              // boxShadow: '0 4px 12px rgba(0, 0, 0, 0.7)',
            }}
            >
              {buttonText}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
        <div className={"w-screen flex justify-center items-center"} id={"popUp"}>
            {isOpen && <JobPostForm close={() => setIsOpen(false)}/>}
        </div>

    </div>
  );
};

export default LandingPage;
