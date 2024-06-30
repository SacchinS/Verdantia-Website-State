import JobApplicationPopUp from "@/app/components/jobApplicationPopUp";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import JobBlock from "@/app/components/jobBlock";
import JobDetailBlock from "@/app/components/jobDetailBlock";

interface Job {
    id: string;
    name: string;
    location: string;
    place: string;
    applicants: string;
    date: string;
    duration: string;
    role: string;
    experience: string;
    description: string;
    requirements: string;
    salary: string;
}

interface JobRecPopUpProps {
    sentJob: string | null;

}

const JobRecPopUp: React.FC<JobRecPopUpProps> = ({ sentJob }) => {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'allJobs'), (snapshot) => {
            snapshot.docs.forEach(doc => {
                const jobData = doc.data();
                const jobName: string = jobData.name;
                if (jobName === sentJob) {
                    setSelectedJob({ id: doc.id, ...jobData } as Job);
                }
            });
        });

        // Cleanup function to unsubscribe from the snapshot listener
        return () => unsubscribe();
    }, [sentJob]);

    const handleJobBlockClick = (job: Job) => {
        setSelectedJob(job);
    };

    return (
        <div className="top-0 left-0 w-full h-full flex items-center justify-center fixed bg-black bg-opacity-50 z-20">
            {selectedJob && (
                <JobBlock
                    key={selectedJob.id}
                    applicantCount={selectedJob.applicants}
                    data={selectedJob.date}
                    jobTitle={selectedJob.name}
                    location={selectedJob.location}
                    workMethod={selectedJob.place}
                    duration={selectedJob.duration}
                    onClick={() => handleJobBlockClick(selectedJob)} // Add to user's job list
                />
            )}
        </div>
    );
};

export default JobRecPopUp;
