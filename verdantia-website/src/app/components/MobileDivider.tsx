
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


const MobileDivider = () => {

    return(

        <div className="flex w-full items-center justify-center gap-[1vw] flex-row">

            <Minus className="w-[9.2vw] h-[9.2vw]" color="#699E1B"/>
            <Sprout className="w-[8vw] h-[8vw]" color="#699E1B"/>
            <Minus className="w-[9.2vw] h-[9.2vw]" color="#699E1B"/>

        </div>


    )

} 

export default MobileDivider