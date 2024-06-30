
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


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  
export function MobileValues() {
return (
    <div className="px-[50vw]">
        <div className="relative text-center px-[3vw] pb-[5vw] text" style={{ fontFamily: 'Montserrat', color: '#3e3e3e', fontSize: '7vw', lineHeight: '9vw' }}>
                    Our Values  
        </div>
        <div className="relative text-center px-[3vw] pb-[10vw]" style={{ fontFamily: 'Montserrat', color: '#3e3e3e', fontSize: '5vw', lineHeight: '9vw' }}>
                    Learn about what we stand for
        </div>
        <Accordion type="single" collapsible className="w-[60vw]">
        <AccordionItem value="item-1">
            <AccordionTrigger className="text-green-700">Environmental Awareness</AccordionTrigger>
            <AccordionContent>
            We inspire positive change through mindful environmental awareness and education. Holding public programs and workshops is our way of giving back to the world and helping people connect with the environment.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger className="text-green-700">Collaboration</AccordionTrigger>
            <AccordionContent>
            We thrive using collaboration by its power for change in sustainability practices. We&apos;ve connected with organizations like UNEP and the EPA to push for sustainable policies. 

            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
            <AccordionTrigger className="text-green-700">Leadership</AccordionTrigger>
            <AccordionContent>
            Our leadership policies adopt a &quot;nobody left behind&quot; attitude, ensuring that every member of Verdantia can stay committed to the sustainability mission of the orgnization.
            </AccordionContent>
        </AccordionItem>
        </Accordion>
    </div>

)
}
  
export default MobileValues