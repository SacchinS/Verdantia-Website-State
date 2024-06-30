
'use client';
import Link from "next/link"
import { collection, doc, getDoc, onSnapshot, updateDoc, arrayUnion, arrayRemove, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import BodyHeading from '../components/bodyHeading';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import ImageDivider from '../components/imageDivider';
import JobApplicationPopUp from '../components/jobApplicationPopUp';
import JobBlock from '../components/jobBlock';
import JobDetailBlock from '../components/jobDetailBlock';
import LandingContent from '../components/landingContent';
import Slideshow from '../components/slideshow';
import ValuesLeftTab from '../components/valuesLeftTab';
import ValuesRightTab from '../components/valuesRightTab';
import { db } from '@/app/firebase/config';
import { motion } from 'framer-motion';
import HandsPlanting from '../../public/images/handsPlanting.svg';
import PotDivider from '../../public/images/potDivider.png';
import ForestDivider from '../../public/images/forestDivider.png';
import Slide1 from '../../public/images/Slide1.svg';
import Slide2 from '../../public/images/Slide2.svg';
import Slide3 from '../../public/images/Slide3.svg';
import Slide4 from '../../public/images/Slide4.svg';
import Slide5 from '../../public/images/Slide5.svg';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { Button, buttonVariants } from "@/components/ui/button";
import { DropdownMenuItem, DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Check, Menu, Search } from "lucide-react";
import { Sprout, Minus } from "lucide-react";

interface myProps {
    slidesrc: string
}

const MobileCard: React.FC<myProps> = ({ slidesrc })  => {

    return(

        <div className="flex flex-col h-[80vw] w-[60vw] justify-center items-center rounded-[15vw] object-center border-opacity-60 border-[0.6vw] border-green-600 shadow-lg">
            
            <img className="z-10 px-[2.5vw] rounded-[12vw] w-full h-full overflow-hidden object-cover object-center " src={slidesrc} />
                


            <div>

            </div>

        </div>


    )

} 

export default MobileCard