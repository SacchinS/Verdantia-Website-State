'use client'

import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { signOut } from '@firebase/auth';
import { motion } from 'framer-motion';
import JobBlock from '@/app/components/jobBlock';
import JobDetailBlock from '../components/jobDetailBlock';
import LandingContent from '@/app/components/landingContent';
import BodyHeading from '@/app/components/bodyHeading';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/app/firebase/config';

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
}

export default function Portal() {
    const [user] = useAuthState(auth);
    const router = useRouter();
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    const [allJobs, setJobListings] = useState<Job[]>([]); // Explicitly defining type as Job[]

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'allJobs'), (snapshot) => {
            const jobs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Job)); // Cast each document to Job type
            setJobListings(jobs);
        });

        return () => unsubscribe();
    }, []);

    // Redirect to signIn if user is not authenticated
    useEffect(() => {
        if (!user) router.push('/signIn');
    }, [user, router]);

    const handleSignOut = () => {
        signOut(auth);
        router.push('/');
    };

    const handleJobBlockClick = (job: Job) => {
        setSelectedJob(job); // Set the selected job when a JobBlock is clicked
    };

    const handleExploreCareers = () => {
        router.push('/jobs');
    };

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
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <div className="flex items-center justify-between relative mt-32">
                    <BodyHeading marginTop="" marginBottom="">My Jobs</BodyHeading>
                    <button onClick={handleExploreCareers} className="[font-family:'Montserrat-Bold',Helvetica] font-bold pr-32 underline">View More</button>
                </div>

                <div className="container mx-auto py-5 text-white overflow-x-auto flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3vw]">
                        {/* Map over job listings to create JobBlocks */}
                        {allJobs.map((job) => (
                            <JobBlock
                                key={job.id}
                                applicantCount={job.applicants}
                                data={job.date}
                                jobTitle={job.name}
                                location={job.location}
                                workMethod={job.place}
                                duration={job.duration}
                                onClick={() => handleJobBlockClick(job)} // Pass onClick handler to JobBlock
                            />
                        ))}
                    </div>
                </div>

                {selectedJob && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                        <JobDetailBlock
                            job={selectedJob.name}
                            date={selectedJob.date}
                            applicants={selectedJob.applicants}
                            location={selectedJob.location}
                            workExperience='test'
                            workType={selectedJob.role}
                            salary='test'
                            detDesc='test'
                            reqDesc='test'
                            imgSrc='test'
                            onClose={() => setSelectedJob(null)} // Add onClose handler to close the modal

                        />
                    </div>
                )}

            </motion.div>
        </main>
    );
}
