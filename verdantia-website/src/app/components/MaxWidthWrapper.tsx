'use client';

import { collection, doc, getDoc, onSnapshot, updateDoc, arrayUnion, arrayRemove, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import BodyHeading from './bodyHeading';
import Carousel from './Carousel';
import Footer from './Footer';
import ImageDivider from './imageDivider';
import JobApplicationPopUp from './jobApplicationPopUp';
import JobBlock from './jobBlock';
import JobDetailBlock from './jobDetailBlock';
import LandingContent from './landingContent';
import Slideshow from './slideshow';
import ValuesLeftTab from './valuesLeftTab';
import ValuesRightTab from './valuesRightTab';
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
import { cn } from "@/lib/utils"

const MaxWidthWrapper = ({
    className,
    children,
} : { 
    className?: string,
    children: ReactNode
}) => {
    return(
        <div 
            className={cn(
                "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
            )}>

        </div>
    )
}

export default MaxWidthWrapper