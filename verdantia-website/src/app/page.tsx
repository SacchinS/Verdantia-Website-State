'use client'

import DetReqBlock from "./components/JDB/detReqBlock"
import DetailsBlock from "./components/JDB/detailsBlock"
import  InfoPanel  from "./components/JDB/infoPanel"
import JobDetailBlock from "./components/jobDetailBlock"
import { JobSubInfoBlock } from "./components/JDB/jobSubInfoBlock"
import ReqsBlock from "./components/JDB/requirementsBlock"
import TitleBlock from "./components/JDB/titleBlock"
import TopInfo from "./components/JDB/topInfo"
import TopLeftInfo from "./components/JDB/topLeftInfo"
import TopRightInfo from "./components/JDB/topRightInfo"
import LandingContent from "./components/landingContent";
import JobBlock from "./components/jobBlock";
import BodyHeading from "./components/bodyHeading";
import HandsPlanting from "../../public/images/handsPlanting.svg";
import PotDivider from "../../public/images/potDivider.png";
import ImageDivider from "./components/imageDivider";
import ValuesLeftTab from "./components/valuesLeftTab";
import ValuesRightTab from "./components/valuesRightTab";
import ForestDivider from "../../public/images/forestDivider.png";

import Slideshow from "./components/slideshow";
import Slide1 from "../../public/images/Slide1.svg";
import Slide2 from "../../public/images/Slide2.svg";
import Slide3 from "../../public/images/Slide3.svg";
import Slide4 from "../../public/images/Slide4.svg";
import Slide5 from "../../public/images/Slide5.svg";

import {getAuth} from "firebase/auth";
import {auth} from "@/app/firebase/config";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/navigation";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";

import Carousel from "./components/Carousel";

import React from 'react';
import { signOut } from '@firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import Footer from "./components/Footer"
import { doc, getDoc, updateDoc, arrayRemove, arrayUnion, setDoc } from 'firebase/firestore';

import JobApplicationPopUp from "./components/jobApplicationPopUp"

const slides = [
  {
    imageUrl: Slide1.src,
    heading: "Reforestation Initiatives",
    subheading: "\"30 per cent of emissions from industry and fossil fuels are soaked up by forests and woodlands. Yet every year the world loses 10 million hectares of forest. Deforestation and forest degradation accounts for 11 per cent of carbon emissions.\" - UN Environment Programme",
    description: "Verdantia has successfully planted over 500,000 trees in deforested regions, contributing to the restoration of critical ecosystems and providing habitat for various wildlife species.",
  },
  {
    imageUrl: Slide2.src,
    heading: "Carbon Neutrality Achieved",
    subheading: "\"A recently published report identified that 100 energy companies have been responsible for 71% of all industrial emissions since human-driven climate change was officially recognized.\" - National Resources Defense Council",
    description: "Through innovative technologies and sustainable practices, Verdantia has achieved carbon neutrality across its operations, making significant strides in reducing its carbon footprint.",
  },
  {
    imageUrl: Slide3.src,
    heading: "Eco-Education Outreach",
    subheading: "\"Environmental education is a process that allows individuals to explore environmental issues, engage in problem solving, and take action to improve the environment.\" - United States Environmental Protection Agency",
    description: "Verdantia's dedicated teams have conducted eco-education programs in local communities, reaching over 10,000 individuals and inspiring environmentally conscious practices.",
  },
  {
    imageUrl: Slide4.src,
    heading: "Smart City Collaboration",
    subheading: "\"Digitalisation and smart controls can reduce emissions from buildings by 350 Mt CO2 by 2050.\" - International Energy Agency",
    description: "Verdantia's smart city solutions with progressive municipalities have lowered energy usage, enhanced waste management efficiency, and elevated urban sustainability.",
  },
  {
    imageUrl: Slide5.src,
    heading: "Biodiversity Conservation",
    subheading: "\"The World Wide Fund for Nature’s Living Planet Report 2022 documents a 69% average loss in the abundance of mammal, bird, reptile, fish and amphibian species since 1970.\" - The London School of Economics and Political Science",
    description: "Verdantia actively supports biodiversity conservation efforts by protecting endangered species and preserving vital habitats.",
  }
];

// Define interface for job data
interface Job {
  id: string;
  name: string;
  location: string;
  place: string;
  applicants: string;
  date: string;
  role: string;
  duration: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string;
}

// Define an interface for the form data
interface JobApplicationFormData {
  userId: string; // New property to store the user ID
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  zipCode: string;
}

export default function Home() {
  const [user] = useAuthState(auth);
  const [isVisible, setIsVisible] = useState(false);

    const router = useRouter();
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [userJobList, setUserJobList] = useState<string[]>([]);
    const [userAppliedJobs, setUserAppliedJobs] = useState<string[]>([]);
    const [allJobs, setJobListings] = useState<Job[]>([]);
    const [showApplicationPopup, setShowApplicationPopup] = useState(false); // State variable for popup visibility
    const [jobApplicationSubmitted, setJobApplicationSubmitted] = useState(false);
    const [applyButtonText, setApplyButtonText] = useState("");

  useEffect(() => {
      const unsubscribe = onSnapshot(collection(db, 'allJobs'), (snapshot) => {
          const jobs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Job));
          setJobListings(jobs);
      });

      return () => unsubscribe();
  }, []);

  // Fetch userJobList when user changes
  useEffect(() => {
      const fetchUserJobList = async () => {
          if (user) {
              try {
                  const userRef = doc(db, `users/${user.uid}`);
                  const userData = await getDoc(userRef);
                  const userJobListData = userData.data()?.jobList || [];
                  setUserJobList(userJobListData);
              } catch (error) {
                  console.error('Error fetching user jobList:', error);
              }
          }
      };

      fetchUserJobList();
  }, [user]);

  // Update addToUserJobList function to explicitly define the type of the 'id' parameter
  const addToUserJobList = async (jobId: string) => {
    if (user) {
        try {
            const userRef = doc(db, 'users', user.uid);
            const userData = await getDoc(userRef);
            const userJobList = userData.data()?.jobList || [];
            
            let updatedJobList: string[] = []; // Explicitly define the type of updatedJobList as string[]

            if (userJobList.includes(jobId)) {
                // If job is already in user's job list, remove it
                await updateDoc(userRef, {
                    jobList: arrayRemove(jobId)
                });
                updatedJobList = userJobList.filter((id: string) => id !== jobId); // Explicitly define the type of id as string
            } else {
                // If job is not in user's job list, add it
                await updateDoc(userRef, {
                    jobList: arrayUnion(jobId)
                });
                updatedJobList = [...userJobList, jobId];
            }

            // Force a state update to reflect the changes immediately
            setUserJobList(updatedJobList);
        } catch (error) {
            console.error('Error updating user jobList:', error);
        }
    }
    else {
      router.push('/signIn');
    }
};

// Function to add job to user's applied jobs list
const addToUserAppliedJobs = async (jobId: string) => {
  if (user) {
      try {
          const userRef = doc(db, 'users', user.uid);
          const userData = await getDoc(userRef);
          const userAppliedJobs = userData.data()?.appliedJobs || [];
          
          if (userAppliedJobs.includes(jobId)) {
              // If job is already in user's applied jobs list, remove it
              await updateDoc(userRef, {
                  appliedJobs: arrayRemove(jobId)
              });
          } else {
              // If job is not in user's applied jobs list, add it
              await updateDoc(userRef, {
                  appliedJobs: arrayUnion(jobId)
              })
          }
      } catch (error) {
          console.error('Error updating user appliedJobs:', error);
      }
  }
  else {
    router.push('/signIn');
  }
};

  // Function to handle applying to a job
  const handleApplyToJob = (jobId: string) => {
    addToUserAppliedJobs(jobId); // Add the job ID to the user's applied jobs list
    setShowApplicationPopup(true); // Show application popup when applying
  };

   // Function to handle clicking on a job block
   const handleJobBlockClick = (job: Job) => {
    setSelectedJob(job); // Set the selected job when a JobBlock is clicked
    // Set the apply button text based on whether the user has applied for the job
    setApplyButtonText(userAppliedJobs.includes(job.id) ? "Applied" : "Apply");
    };

    // Function to close the application popup
    const handleClosePopup = () => {
      setShowApplicationPopup(false);
    };

    // Define a function to handle job application submission
    const handleJobApplicationSubmit = async (formData: JobApplicationFormData) => {
      if (user && selectedJob) {
          try {
              // Populate the userId property with the user's ID
              formData.userId = user.uid;
  
              // Use the job ID as the document name
              const docRef = await setDoc(doc(db, 'jobApplications', selectedJob.id), formData);
              console.log('Document written with ID: ', selectedJob.id);
  
              // Update the jobApplicationSubmitted state to true
              setJobApplicationSubmitted(true);
          } catch (error) {
              console.error('Error adding document: ', error);
          }
      }
  };


  return (
    <main>
      <LandingContent
        heading="Welcome to \nVerdantia"
        subheading="Where Sustainability meets Innovation."
        buttonText="Join the Team"
      />

    
        <div className=" mb-[5vw] mt-[5vw] text-[9vw] ml-[19vw]                  sm:mt-[10vw] sm:mb-[19vw] sm:ml-[8vw] sm:text-[2.8vw]" style={{fontFamily : "Bellota Text"}}>
          Featured Jobs
        </div>
        
        <div className="flex flex-col justify-center ml-[13vw] gap-[5vw]">
          <JobBlock

            data="3 days ago"
            applicantCount="13"
            workMethod="Remote"
            location="Seattle, WA"
            jobTitle= "Environmental Systems Manager"
            duration="Full Time"

          />
          <JobBlock

            data="9 days ago"
            applicantCount="154"
            workMethod="Hybrid"
            location="London, UK"
            jobTitle= "Forest Projects Coordinator"
            duration="Part Time"

          />

          <JobBlock

            data="27 days ago"
            applicantCount="43"
            workMethod="In Person"
            location="Seattle, WA"
            jobTitle= "Senior Systems Engineer"
            duration="Internship"

          />          
        </div>
        <div>


      </div>

      <div
      >
        <div className=" mb-[10vw] mt-[10vw] text-[9vw] ml-[23vw]    sm:mt-[10vw] sm:mb-[19vw] sm:ml-[8vw] sm:text-[2.8vw]" style={{fontFamily : "Bellota Text"}}>
          Our Mission
        </div>
        <img src={HandsPlanting.src} alt="Hands Planting" className="sm:w-[40vw] h-auto" />

        <div className="flex justify-center text-center items-center ml-[5vw] mt-[10vw] mr-[5vw] px-[4vw] text-[4.4vw]" style={{ fontFamily: 'Montserrat'}}>
          <div className="" style={{ fontFamily: 'Montserrat'}}>
            At Verdantia, our mission is to revolutionize <strong>environmental sustainability</strong> by seamlessly integrating technology and human impact. We believe in a holistic approach, leveraging <strong>cutting-edge innovations</strong> alongside direct, hands-on efforts to create a more <strong>sustainable and resilient future</strong> for our planet.
          </div>
        </div>  
      </div>


      <div

      >
        <div className=" mb-[10vw] mt-[10vw] text-[9vw] ml-[28vw]" style={{fontFamily : "Bellota Text"}}>
          Our Impact
        </div>
        <div>
          <ValuesLeftTab
            title = "Environmental Awareness"
            subheading = "We inspire positive change through mindful environmental awareness and education."
            iconSrc= "/images/Values1.svg"
          />

          <ValuesRightTab
            title = "Collaboration"
            subheading = "We thrive using collaboration, leveraging its power for meaningful change in sustainability."
            iconSrc= "/images/Values2.svg"
          />

          <ValuesLeftTab
            title = "Leadership"
            subheading = "Guided by visionary leadership, we aim to inspire a sustainable future through innovation and determination."
            iconSrc= "/images/Values3.svg"
          />

          <ValuesRightTab
            title = "Responsibility"
            subheading = "Responsibility is central to Verdantia, guiding decisions with integrity as well as transparency for sustainable initiatives."
            iconSrc= "/images/Values4.svg"
            showDivider={false}
          />      
        </div>

      </div>


      <Footer/>

    </main>
  );
}