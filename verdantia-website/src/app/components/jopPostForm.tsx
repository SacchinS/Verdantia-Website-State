import React from "react";
import {addDoc, collection} from "firebase/firestore";
import {db} from "@/app/firebase/config";

const JobPostForm: React.FC = () => {

    const [name, setName] = React.useState("");
    const [role, setRole] = React.useState("");
    const [place, setPlace] = React.useState("");
    const [duration, setDuration] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [requirements, setRequirements] = React.useState("");

    const handleSubmit = async () => {
        const docRef = await addDoc(collection(db, "allJobs"), {
            name: name,
            role: role,
            place: place,
            duration: duration,
            location: location,
            description: description,
            requirements: requirements,
        })
        setName("")
        setRole("")
        setPlace("")
        setDuration("")
        setLocation("")
        setDescription("")
        setRequirements("")
    }

    return (
    <main>
        <div
            className={"inline-flex flex-col items-start gap-[1vw] p-[2vw] relative bg-white w-fit border border-solid border-[#b2b2b2] shadow-[0px_4px_4px_#00000040] rounded-[1vw]"}>
            <div className="inline-flex flex-col items-start relative">
                <div
                    className="relative w-fit mt-[-1.00px] [font-family:'Bellota_Text',Helvetica] text-black text-[2.5vw] tracking-[0] leading-[normal]">
                    Post Job Application
                </div>

            </div>
            <div className={"inline-flex flex-col items-start gap-[1vw] relative"}>
                <div
                    className="flex flex-row items-start justify-center gap-[1vw] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start gap-[1vw] w-full">

                        <div
                            className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                            Name
                        </div>
                        <input
                            type="firstname"
                            placeholder="Enter"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full h-fit p-[0.8vw] rounded-[0.5vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                        />

                        <div
                            className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                            Duration
                        </div>
                        <div>
                            <select
                                className="rounded-[0.5vw] w-full h-fit p-[0.8vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                                style={{fontFamily: "Bellota Text"}}
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                            >
                                <option value="Full Time">Select</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>
                        <div
                            className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                            Place
                        </div>
                        <div>
                            <select
                                className="rounded-[0.5vw] w-full h-fit p-[0.8vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                                style={{fontFamily: "Bellota Text"}}
                                value={place}
                                onChange={(e) => setPlace(e.target.value)}
                            >
                                <option value="In Person">Select</option>
                                <option value="In Person">In Person</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Remote">Remote</option>
                            </select>
                        </div>
                        <div
                            className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                            Description
                        </div>
                        <input
                            type="firstname"
                            placeholder="Enter"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full h-fit p-[0.8vw] rounded-[0.5vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                        />

                        <button
                            onClick={handleSubmit}
                            className="mt-[0.75vw] flex items-center justify-center py-[0.7vw] w-full bg-[#53975d] rounded-[0.5vw] overflow-hidden">
                            <div className="text-white text-[1vw] leading-27.6">
                                Submit
                            </div>
                        </button>
                    </div>
                    <div className="flex flex-col items-start gap-[1vw] w-full">

                        <div
                            className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                            Role
                        </div>
                        <div>
                            <select
                                className="rounded-[0.5vw] w-full h-fit p-[0.8vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                                style={{fontFamily: "Bellota Text"}}
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="Coordinator">Select</option>
                                <option value="Coordinator">Coordinator</option>
                                <option value="Manager">Manager</option>
                                <option value="Engineer">Engineer</option>
                                <option value="Scientist">Scientist</option>
                                <option value="Analyst">Analyst</option>
                            </select>
                        </div>

                        <div
                            className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                            Location
                        </div>
                        <div>
                            <select
                                className="rounded-[0.5vw] w-full h-fit p-[0.8vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                                style={{fontFamily: "Bellota Text"}}
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            >
                                <option value="Seattle, WA">Select</option>
                                <option value="Seattle, WA">Seattle, WA</option>
                                <option value="London, UK">London, UK</option>
                                <option value="New York City, NY">New York City, NY</option>
                            </select>
                        </div>
                        <div
                            className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                            Requirements
                        </div>
                        <input
                            type="firstname"
                            placeholder="Enter"
                            value={requirements}
                            onChange={(e) => setRequirements(e.target.value)}
                            className="w-full h-fit p-[0.8vw] rounded-[0.5vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                        />

                    </div>

                </div>

            </div>
        </div>

    </main>
    )
}

export default JobPostForm