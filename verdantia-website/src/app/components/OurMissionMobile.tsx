
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

const OurMissionMobile = () =>{

    return(

        <div> 
            
            <div className="pl-[13vw] pb-[4vw]" style={{ fontFamily: 'Montserrat', color: '#3e3e3e', fontSize: '7vw', lineHeight: '9vw' }}>
                Our Mission 
            </div>
            <div className="px-[13.5vw] " style={{ fontFamily: 'Montserrat', color: '#3e3e3e', fontSize: '4vw', lineHeight: '5.5vw' }}>
              At Verdantia, our mission is to revolutionize{' '}
              <strong>environmental sustainability</strong> by seamlessly integrating technology and
              human impact. We believe in a holistic approach, leveraging{' '}
              <strong>cutting-edge innovations</strong> alongside direct, hands-on efforts to create a
              more <strong>sustainable and resilient future</strong> for our planet.
            </div>
        </div>

        


    )

}

export default OurMissionMobile

