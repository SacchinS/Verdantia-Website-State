'use client'

import BodyHeading from '../components/bodyHeading';
import LandingContent from '../components/landingContent';
import RoleFilter from '../components/RoleFilter';
import DurationFilter from '../components/DurationFilter';
import LocationFilter from '../components/LocationFilter';
import PlaceFilter from "../components/PlaceFilter"
import {collection, doc, getDoc, getDocs, onSnapshot, query} from "firebase/firestore";
import {db} from "@/app/firebase/config";
import ViewFilters from "@/app/components/viewFilters";
import React, {useEffect, useState} from "react";
import JobBlock from "@/app/components/jobBlock";
import {list} from "postcss";
import {List} from "postcss/lib/list";
import placeFilter from "../components/PlaceFilter";
import signUpPopUp from "@/app/components/signUpPopUp";

export default function Jobs() {

    interface Job {
        id: string;
        name: string;
        location: string;
        place: string;
        applicants: string;
        date: string;
        duration: string;
        role: string
    }

    const [allJobs, setJobListings] = useState<Job[]>([]); // Explicitly defining type as Job[]

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'allJobs'), (snapshot) => {
            const jobs = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()} as Job)); // Cast each document to Job type
            setJobListings(jobs);
        });
        return () => unsubscribe();
    }, []);


    const [durations, setDurations] = useState([]);
    const [location, setLocation] = useState([]);
    const [places, setPlaces] = useState([]);
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "selectedFilters"), snapshot => {
            snapshot.forEach((doc) => {
                const data = doc.data();

                setDurations(data.durations)
                setLocation(data.location)
                setPlaces(data.places)
                setRoles(data.roles)
            })
        })
        return () => unsubscribe();
    }, []);

    const getFilters = () => {
        console.log("Durations: ", durations)
        console.log("Locations: ", location)
        console.log("Places: ", places)
        console.log("Roles: ", roles)
    }

    const getJobs = () => {
        console.log(getJobsToRender)
    }

    const getJobsToRender = allJobs.filter(Job => {
        console.log("Job: ",Job)
        console.log("Places: ", places)
        console.log("-", places.includes(Job.place))
        if ((location.includes(Job.location) || location.length == 0) &&
            (places.includes(Job.place) || places.length == 0)  &&
            (durations.includes(Job.duration) || durations.length == 0) &&
            (roles.includes(Job.role) || roles.length == 0)) return true;
        return false
    })

    return (
        <main>
            <LandingContent
                heading="Discover your \nNext Job"
                subheading="Explore your passions"
            />

            <div className="container mx-auto">
                <BodyHeading marginTop="8vw" marginBottom="2vw">Jobs at Verdantia</BodyHeading>

                <div className="grid grid-cols-1 md:grid-cols-2 ml-[8vw] mr-[8vw]">
                    <div className="md:col-span-1"> {/* Apply styling specifically for RoleFilter */}
                        <RoleFilter/>
                    </div>
                    <div className="md:col-span-1"> {/* Apply styling specifically for DurationFilter */}
                        <DurationFilter/>
                    </div>
                    <div
                        className="md:col-span-2"> {/* This div spans both columns, applying styling for LocationFilter */}
                        <LocationFilter/>
                        <PlaceFilter/>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-5 text-white overflow-x-auto flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3vw]">
                    {/* Map over job listings to create JobBlocks */}
                    {getJobsToRender.map((job) => (
                        <JobBlock
                            key={job.id}
                            applicantCount={job.applicants}
                            data={job.date}
                            jobTitle={job.name}
                            location={job.location}
                            workMethod={job.place}
                            duration={job.duration}
                        />
                    ))}
                </div>
            </div>

            <div className='mb-[20vw]'></div>

        </main>

    );
}
