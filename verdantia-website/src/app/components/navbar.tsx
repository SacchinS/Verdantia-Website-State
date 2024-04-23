'use client'


import { useState } from 'react'; // Import useState hook
import Link from 'next/link';
import { motion } from 'framer-motion';
import {signOut} from "@firebase/auth";
import {auth} from "@/app/firebase/config";
import {useRouter} from "next/navigation";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const router = useRouter()
  const handleSignOut = () => {
    signOut(auth);
    console.log('Sign Out')
    router.push('/')
  }

  return (
    <div>
      <div className="bg-custom-green py-[1vw] mt-[1vw]"></div>
      <div className="container mx-auto flex items-center justify-between py-[1vw]" style={{ fontFamily: 'Bellota Text' }}>
        <div className="ml-[8vw]">
          <div className="text-black" style={{ fontSize: '2vw' }}>
            VERDANTIA | Careers
          </div>
        </div>
        <div className="flex items-center space-x-[1.5vw] mx-[8vw]" style={{ fontSize: '1.25vw' }}>
          <NavLink href="/" text="Home" /> 
          <NavLink href="/benefits" text="Benefits" />
          <NavLink href="/jobs" text="Jobs" />
          <NavLink href="/portal" text="Portal" />
          {/* Image as clickable button to open dropdown */}
          <div onClick={toggleDropdown} className="relative">
            <img src="/images/user-nobg.png" alt="Account" className="h-[1.5vw] w-[1.5vw] cursor-pointer" />
            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute bg-white rounded-md flex flex-col w-max px-[0.6vw] py-[0.4vh] mt-[0.4vw] right-0">
                <button onClick={handleSignOut}>Sign Out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
  return (
    <Link href={href}>
      <motion.span
        className="text-black cursor-pointer hover:text-gray-800"
        transition={{ duration: 1 }} // Smooth transition
        style={{ fontSize: '1.25vw' }} // Default font size
        whileHover={{ fontSize: '1.4vw' }} // Increase font size when hovered
      >
        {text}
      </motion.span>
    </Link>
  );
};

export default Navbar;
