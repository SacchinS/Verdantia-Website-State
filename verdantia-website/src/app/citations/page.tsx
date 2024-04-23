'use client'

import LandingContent from "../components/landingContent";
import React from 'react';
import JobBlock from "../components/jobBlock";
import useMeasure from "react-use-measure";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { animate, useMotionValue } from "framer-motion";

export default function Citations() {
    
    const blocks = [
    {
        data: "3 Days ago",
        applicantCount: "178 Applicants",
        workMethod: "Remote",
        location: "San Francisco, CA",
        jobTitle: "Environmental Scientist",
    },
    {
        data: "3 Days ago",
        applicantCount: "178 Applicants",
        workMethod: "Remote",
        location: "San Francisco, CA",
        jobTitle: "Environmental Scientist",
    },
    {
        data: "3 Days ago",
        applicantCount: "178 Applicants",
        workMethod: "Remote",
        location: "San Francisco, CA",
        jobTitle: "Environmental Scientist",
    }
    ];

    const FAST_DURATION = 25;

    let [ref, {width}] = useMeasure();

    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 3;

        controls = animate(xTranslation, [0, finalPosition], {
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
        });

        return controls.stop;
    }, [xTranslation, width])

    return (
        <main>
            <LandingContent
                heading="Citations"
                subheading="Testing ticker/carousel"
            />

            <motion.div className="absolute left-0 flex gap-4" ref={ref} style={{x: xTranslation}}>
                {[...blocks, ...blocks].map((item, idx: number) => (
                    <JobBlock data={item.data} applicantCount={item.applicantCount} workMethod={item.workMethod} location={item.location} jobTitle={item.jobTitle} key={idx}></JobBlock>
                ))}
            </motion.div>

        </main>
    );
}