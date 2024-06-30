
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


const MobileNavBar = () => {
    const user = undefined
    const isAdmin = false
    return(
        //<div> 
        //<nav className="sticky z-[100] h-10 inset-x-0 px-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        //     <MaxWidthWrapper>
        //         <div className="flex h-10 items-center justify-between border-b border-zinc-200">
        //             <Link href="/" className=" flex z-40 font-semibold" style={{ fontFamily: 'Bellota Text', color: '#3E3E3E', fontSize: '8vw', lineHeight: '5vw' }}>
        //                 <span className="bg-green-100 px-1">Verdantia</span>
        //             </Link>
        //             <div className="h-full flex items-center space-x-4">
        //                 {user ? (
        //                     <>
        //                         <Link href = "/api/auth/register" className={buttonVariants({
        //                             size: 'sm',
        //                             variant: "ghost",
        //                         })}>
        //                         Sign out
        //                         </Link>
        //                         {isAdmin ? (
        //                             <Link href = "/api/auth/logout" className={buttonVariants({
        //                                 size: 'sm',
        //                                 variant: "ghost",
        //                             })}>
        //                             Dashboard
        //                             </Link>
        //                         ) : null}
        //                         <Link href = "/configure/upload" className={buttonVariants({
        //                                 size: 'sm',
        //                                 variant: "ghost",
        //                             })}>
        //                             Create Case
        //                         </Link>
        //                     </>
        //                 ) : (                             
        //                     <>
        //                         <Link href = "/api/auth/register" className={buttonVariants({
        //                             size: 'sm',
        //                             variant: "ghost",
        //                         })}>
        //                         Sign out
        //                         </Link>
        //                         {isAdmin ? (
        //                             <Link href = "/api/auth/logout" className={buttonVariants({
        //                                 size: 'sm',
        //                                 variant: "ghost",
        //                             })}>
        //                             Dashboard
        //                             </Link>
        //                         ) : null}
        //                         <Link href = "/configure/upload" className={buttonVariants({
        //                                 size: 'sm',
        //                                 variant: "ghost",
        //                             })}>
        //                             Create Case
        //                         </Link>                                           
        //                     </>
        //                 )}
        //             </div>
        //             {/* <DropdownMenu>
        //                 <DropdownMenuTrigger>
        //                     <Menu>

        //                     </Menu>
        //                 </DropdownMenuTrigger>
        //                 <DropdownMenuContent>
        //                     <DropdownMenuLabel>My Account</DropdownMenuLabel>
        //                     <DropdownMenuItem>Home</DropdownMenuItem>
        //                     <DropdownMenuItem>Benefits</DropdownMenuItem>
        //                     <DropdownMenuItem>Careers</DropdownMenuItem>
        //                     <DropdownMenuItem>My Applications</DropdownMenuItem>
        //                 </DropdownMenuContent>
        //             </DropdownMenu> */}

        //         </div>
        //     </MaxWidthWrapper>
           
        // </nav>
        //</div>
        <div className="sticky z-[100] top-0 w-full inset-x-0 border-border border-[0.4vw] bg-background/85 backdrop-blur ">
            <div className="container mx-auto flex h-[15vw] items-center justify-between gap ">
                <Link href = "/" className="flex" style={{ fontFamily: 'Bellota Text', color: '#3E3E3E', fontSize: '8vw', lineHeight: '5vw' }}>
                    Verdantia
                </Link>
                <div className="flex space-x-4">
                    <Link href="/signIn" className={buttonVariants({variant: "default", size:"sm" })} 
                        style={{ fontFamily: 'Montserrat', color: '#F3F3F3', fontSize: '4vw', lineHeight: '5vw' }}>
                        Log In
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Menu>

                            </Menu>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuItem>Home</DropdownMenuItem>
                            <DropdownMenuItem>Benefits</DropdownMenuItem>
                            <DropdownMenuItem>Careers</DropdownMenuItem>
                            <DropdownMenuItem>My Applications</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu> 
                </div>
            </div>
        </div>
    )
}

export default MobileNavBar