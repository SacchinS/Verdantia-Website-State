
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
    <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
        <AccordionTrigger>Is it grippy?</AccordionTrigger>
        <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
        <AccordionTrigger>Do it Jiggle?</AccordionTrigger>
        <AccordionContent>
        Yes. It comes with default styles that matches the other
        components&apos; aesthetic.
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
        <AccordionTrigger>Can my cronem hit?</AccordionTrigger>
        <AccordionContent>
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
        </AccordionContent>
    </AccordionItem>
    </Accordion>
)
}
  
export default MobileValues