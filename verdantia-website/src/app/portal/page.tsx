'use client'

import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import {useRouter} from "next/navigation";
import {signOut} from "@firebase/auth";
import LandingContent from "@/app/components/landingContent";
import JobBlock from "@/app/components/jobBlock";
import BodyHeading from "@/app/components/bodyHeading";
import {motion, useAnimation} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import JobDetailBlock from "@/app/components/jobDetailBlock";

export default function Portal() {

    const [user] = useAuthState(auth)
    const router = useRouter()
    console.log(user)
    if (!user){
        router.push('/signIn')
    }
    const handleSignOut = () => {
        signOut(auth);
        console.log('Sign Out')
        router.push('/')
    }
    const handleExploreCareers = () => {
        console.log('redirect to jobs')
        router.push('/jobs')
    }
    const [isVisible, setIsVisible] = useState(false);
    const controlsFeaturedJobs = useAnimation();
    const controlsOurMission = useAnimation();
    const controlsOurValues = useAnimation();
    const controlsOurImpacts = useAnimation();

    const refFeaturedJobs = useRef<HTMLDivElement | null>(null);
    const refOurMission = useRef<HTMLDivElement | null>(null);
    const refOurValues = useRef<HTMLDivElement | null>(null);
    const refOurImpacts = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const onScroll = () => {
            const checkVisibility = (ref: React.MutableRefObject<HTMLDivElement | null>, controls: any) => {
                if (ref.current && ref.current.getBoundingClientRect().top < window.innerHeight) {
                    setIsVisible(true);
                    controls.start("visible");
                }
            };

            checkVisibility(refFeaturedJobs, controlsFeaturedJobs);
            checkVisibility(refOurMission, controlsOurMission);
            checkVisibility(refOurValues, controlsOurValues);
            checkVisibility(refOurImpacts, controlsOurImpacts);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [controlsFeaturedJobs, controlsOurMission, controlsOurValues, controlsOurImpacts]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (

        <main>
            <LandingContent
                heading="Welcome to \nYour Portal"
                subheading=""
                buttonText="Explore Careers" 
            />

            <motion.div
                ref={refFeaturedJobs}
                initial="hidden"
                animate={controlsFeaturedJobs}
                variants={variants}
            >
                <div className="flex items-center justify-between relative mt-32">
                    <BodyHeading marginTop="" marginBottom="">My Jobs</BodyHeading>

                        <button onClick={handleExploreCareers}
                            className="[font-family:'Montserrat-Bold',Helvetica] font-bold pr-32 underline">
                            View More
                        </button>


                </div>
                <div
                    className="container mx-auto py-5 px-6 text-white relative z-10 overflow-x-auto flex gap-[5vw]">
                    <JobBlock
                        applicantCount="178 Applicants"
                        data="3 Days ago"
                        jobTitle="Environmental Scientist"
                        location="San Francisco, CA"
                            workMethod="Remote"
                        />
                        <JobBlock
                            applicantCount="178 Applicants"
                            data="3 Days ago"
                            jobTitle="Environmental Scientist"
                            location="San Francisco, CA"
                            workMethod="Remote"
                        />
                        <JobBlock
                            applicantCount="178 Applicants"
                            data="3 Days ago"
                            jobTitle="Environmental Scientist"
                            location="San Francisco, CA"
                            workMethod="Remote"
                        />
                </div>
                <div className={"w-full flex items-center justify-center mt-6"}>
                    <JobDetailBlock
                        job="Environmental Scientist"
                        date="Posted 3 days ago"
                        applicants="35 applicants"
                        location = "San Francisco, CA"
                        workExperience="Entry Level"
                        workType="Remote"
                        salary="$70,000"
                        detDesc="Lorem ipsum dolor sit amet consectetur. Tellus mattis in dictum placerat. Imperdiet mauris in ultrices metus adipiscing vitae. Massa ut dui arcu cursus facilisis. Sed eget sem vitae amet."
                        reqDesc="Lorem ipsum dolor sit amet consectetur. Tellus mattis in dictum placerat. Imperdiet mauris in ultrices metus adipiscing vitae. Massa ut dui arcu cursus facilisis. Sed eget sem vitae amet."
                        imgSrc="./components/EnvScientist.png"
                    />
                </div>

            </motion.div>
        </main>

)
}